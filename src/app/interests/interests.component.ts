import { Component } from '@angular/core';
import { InterestsService } from '../services/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  constructor(private interestService: InterestsService){
  }

  interests: any[] = [];

  ngOnInit(): void {
    this.interestService.getInterest()
    .subscribe( (data: any) => {
      console.log(data);
      //alert(JSON.stringify(data));
      this.interests = data.interests;
    })
  }
}
