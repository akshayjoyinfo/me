import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me.component';
import {MaterialModule} from '../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  exports: [ AboutMeComponent ]
})
export class PagesModule { }
