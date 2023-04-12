import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.ar.queryParams.subscribe({
      next: (q) => {
        console.log(q);
      },
    });
  }
}
