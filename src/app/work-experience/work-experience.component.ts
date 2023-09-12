import { Component, OnInit } from '@angular/core';
import {WorkExperienceServiceService} from '../services/work-experience-service.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  constructor(private workExperienceService: WorkExperienceServiceService){
  }

  data: any[] = [];

  ngOnInit(): void {
    this.workExperienceService.getWorkExperience()
    .subscribe( (data: any) => {
      console.log(data);
      //alert(JSON.stringify(data));
      this.data = data.work_experience;
    })
  }
}
