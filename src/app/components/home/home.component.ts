import { Component, OnInit } from '@angular/core';
import { DownloadPdfService } from 'src/app/services/download-pdf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public downloadPdf:DownloadPdfService) { }

  ngOnInit(): void {
  }

}
