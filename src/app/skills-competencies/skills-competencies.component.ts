import { Component, OnInit } from '@angular/core';
import { SkillsCompetenciesService } from '../services/skills-competencies.service';

@Component({
  selector: 'app-skills-competencies',
  templateUrl: './skills-competencies.component.html',
  styleUrls: ['./skills-competencies.component.css']
})
export class SkillsCompetenciesComponent implements OnInit {
  constructor(private skillsCompetencies: SkillsCompetenciesService){
  }

  data: any[] = [];

  ngOnInit(): void {
    this.skillsCompetencies.getSkillsCompetencies()
    .subscribe( (data: any) => {
      console.log(data);
      //alert(JSON.stringify(data));
      this.data = data.work_experience;
    })
  }
}
