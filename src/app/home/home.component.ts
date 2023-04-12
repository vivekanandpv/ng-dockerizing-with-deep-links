import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private demoService: DemoService) {}

  handleClick() {
    this.router.navigate(['contact', 2022], {
      queryParams: {
        animal: 'tiger',
        origin: 'india',
        alive: 4000,
      },
    });
    // this.router.navigateByUrl('contact');
  }

  ngOnInit(): void {
    const sub = new ReplaySubject<number>();

    sub.subscribe({
      next: (n) => console.log('sub 1', n),
      error: (e) => console.log('sub 1 error', e.message),
      complete: () => console.log('sub 1 completed'),
    });

    sub.next(123);
    sub.next(-3.4);
    sub.next(45);

    sub.subscribe({
      next: (n) => console.log('sub 2', n),
      error: (e) => console.log('sub 2 error', e.message),
      complete: () => console.log('sub 2 completed'),
    });

    sub.next(8989);
  }
}
