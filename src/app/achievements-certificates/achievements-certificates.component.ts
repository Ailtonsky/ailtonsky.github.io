import { Component } from '@angular/core';
import { AchievementsCertificatesService } from '../services/achievements-certificates.service';

@Component({
  selector: 'app-achievements-certificates',
  templateUrl: './achievements-certificates.component.html',
  styleUrls: ['./achievements-certificates.component.css']
})
export class AchievementsCertificatesComponent {

  constructor(private achievementsCertificatesService: AchievementsCertificatesService){
  }

  certificates: any[] = [];

  ngOnInit(): void {
    this.achievementsCertificatesService.getAchievementsCertificates()
    .subscribe( (data: any) => {
      console.log(data);
      //alert(JSON.stringify(data));
      this.certificates = data.achievements_certificates;
    })
  }
}
