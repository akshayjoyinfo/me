import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SkillHeader } from 'src/app/shared/models/skill-header.model';
import { ElementRef, ViewChild } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit,  AfterViewInit {

  @ViewChild('gridlistcontainer', {static: true}) elementView: ElementRef;
  loading = true;
  gridListRowHeight: number;
  girdListRowHeightWithPixel: string;
  responsive = true;
  cols = 1;
  skillHeaders: SkillHeader[] = [];
  githubLanguages: any[] = [];
  errorMessage = '';

  constructor(private apiService: ApiService, ) {

   }

   ngAfterViewInit(): void {
  }


  ngOnInit() {
    this.girdListRowHeightWithPixel = (window.innerHeight - 410) + 'px';

    this.apiService.getAboutSkillHeaders().subscribe(
      skillHeaders => {
        this.skillHeaders = skillHeaders;
      },
      error => this.errorMessage = error as any
    );

    this.apiService.getGithubLangugaes().subscribe(
      langs => {
        this.githubLanguages = langs;
        this.loading = false;
      },
      error => this.errorMessage = error as any
    );
  }

  goToLink(url: string){
    window.open(url, '_blank');
}

}
