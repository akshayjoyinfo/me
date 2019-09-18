import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  loading = true;
  errorMessage = '';
  constructor() { }

  ngOnInit() {
    this.loading = false;
  }
  goToLink(url: string){
    window.open(url, '_blank');
  }

}
