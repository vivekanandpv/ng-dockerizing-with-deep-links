import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReportComponent } from './report/report.component';
import { DemoService } from '../demo.service';

@NgModule({
  declarations: [ReportComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
