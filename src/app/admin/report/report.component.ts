import { Component } from '@angular/core';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  constructor(private demoService: DemoService) {}
}
