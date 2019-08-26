import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/shared/models/experience.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  errorMessage = '';
  constructor( private apiService: ApiService) {
    this.apiService.getExperiences().subscribe(
      profile => {
        this.experiences = profile;
      },
      error => this.errorMessage = error as any
    );
   }

  ngOnInit() {
  }

}
