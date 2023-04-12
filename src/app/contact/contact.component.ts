import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    const val = +(this.ar.snapshot.paramMap.get('year') ?? '--');

    if (isNaN(val)) {
      console.log('No or invalid route parameter');
    } else {
      console.log(val, typeof val);
    }

    this.ar.queryParams.subscribe({
      next: (q) => {
        console.log(q);
      },
    });
  }
}
