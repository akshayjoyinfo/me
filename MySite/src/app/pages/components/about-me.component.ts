import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SkillHeader } from 'src/app/shared/models/skill-header.model';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  responsive = true;
  cols = 1;
  skillHeaders: SkillHeader[] = [];
  githubLanguages: any[] = [];
  errorMessage = '';

  constructor(private apiService: ApiService) {

   }

  ngOnInit() {
    this.apiService.getAboutSkillHeaders().subscribe(
      skillHeaders => {
        this.skillHeaders = skillHeaders;
      },
      error => this.errorMessage = error as any
    );

    this.apiService.getGithubLangugaes().subscribe(
      langs => {
        this.githubLanguages = langs;
        console.log(this.githubLanguages);
      },
      error => this.errorMessage = error as any
    );
  }

  goToLink(url: string){
    window.open(url, '_blank');
}

}
