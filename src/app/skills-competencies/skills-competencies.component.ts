import { Component, OnInit } from '@angular/core';
import { SkillsCompetenciesService } from '../services/skills-competencies.service';

@Component({
  selector: 'app-skills-competencies',
  templateUrl: './skills-competencies.component.html',
  styleUrls: ['./skills-competencies.component.css']
})
export class SkillsCompetenciesComponent implements OnInit {
  constructor(private skillsCompetenciesService: SkillsCompetenciesService){
  }

  skills: any[] = [];

  ngOnInit(): void {
    this.skillsCompetenciesService.getSkillsCompetencies()
    .subscribe( (data: any) => {
      console.log(data);
      //alert(JSON.stringify(data));
      this.skills = data.skills_competencies;
    })
  }
}
