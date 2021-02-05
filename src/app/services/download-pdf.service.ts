import { Injectable } from '@angular/core';

import FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadPdfService {

  downloadPdf() {
    const DevPdfURL:string = "../../assets/documents/curriculum.pdf";
    const ProdPdfURL:string = "./assets/documents/curriculum.pdf";
    const pdfName:string = "curriculum";
    FileSaver.saveAs(ProdPdfURL, pdfName);
  }

  constructor() { }
}
