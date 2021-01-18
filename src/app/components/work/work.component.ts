import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/works.model';
import { WorkService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  work:Work[]=[];

  constructor(private worksService: WorkService) {
    this.work = worksService.work;
  }

  ngOnInit(): void {
  }

}
