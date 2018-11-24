import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service'

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  constructor(private _reportService: ReportService) { }

  ngOnInit() {
  }

  onGenerate() {
    this._reportService.generateReport(); 
  }

}
