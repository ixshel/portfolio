import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skills.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skill:Skill[]=[];

  constructor(private skillsService:SkillsService) {
    this.skill = skillsService.skill;
  }

  ngOnInit(): void {
  }

}
