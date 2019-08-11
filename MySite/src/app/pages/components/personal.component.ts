import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { PersonalProfile } from 'src/app/shared/models/personal-profile.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  responsive = true;
  cols = 3;
  profileOptions: FormGroup;
  profileInformations: PersonalProfile[] = [];
  errorMessage = '';

  // iniFormWithPorfileData(fb: FormBuilder, profileInformations: PersonalProfile[]) {
  //   const group = this.fb.group({
  //     floatLabel: 'always'
  //   });
  //   profileInformations.forEach(fieldInfo => {
  //     const control = this.fb.control(
  //       fieldInfo.label,
  //       );
  //     group.addControl(fieldInfo.label, control);
  //   });
  // }

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.apiService.getProfileDetails().subscribe(
      profile => {
        this.profileInformations = profile;
        this.profileOptions = this.fb.group({
          floatLabel: 'always'
        });
        this.profileOptions.disable();
      },
      error => this.errorMessage = error as any
    );

  }

  ngOnInit() {
  }

}
