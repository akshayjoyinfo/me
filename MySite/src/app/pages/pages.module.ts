import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me.component';
import {MaterialModule} from '../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonalComponent } from './components/personal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './components/experience.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@NgModule({
  declarations: [AboutMeComponent, PersonalComponent, ExperienceComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxTwitterTimelineModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ AboutMeComponent, PersonalComponent ]
})
export class PagesModule { }
