import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  loading = true;
  errorMessage = '';
  projects: Project[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getProjects().subscribe(
      profile => {
        console.log(profile);
        this.projects = profile;
        this.loading = false;
      },
      error => this.errorMessage = error as any
    );
   }

  ngOnInit() {
    this.loading = true;
  }
  goToLink(url: string){
    window.open(url, '_blank');
  }
}
