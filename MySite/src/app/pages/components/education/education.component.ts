import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/shared/models/education.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  loading = true;
  errorMessage = '';
  education: Education[] = [];
  constructor(private apiService: ApiService) {
    this.apiService.getEducation().subscribe(
      profile => {
        console.log(profile);
        this.education = profile;
        this.loading = false;
      },
      error => this.errorMessage = error as any
    );
  }

  ngOnInit() {
  }

}
