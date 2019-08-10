import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillHeader } from './models/skill-header.model';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SkillHeader
  ],
  exports: [
    SkillHeader
  ]
})
export class SiteModelsModule { }
