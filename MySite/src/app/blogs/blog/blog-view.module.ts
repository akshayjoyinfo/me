import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { BlogViewComponent } from './blog-view.component';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BlogViewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: BlogViewComponent}
    ]),
    MarkdownModule.forChild()
  ]
})
export class BlogViewModule { }
