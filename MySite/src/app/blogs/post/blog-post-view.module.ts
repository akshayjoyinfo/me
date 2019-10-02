import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { BlogPostViewComponent } from './blog-post-view.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BlogPostViewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: BlogPostViewComponent},
      { path: ':id', component: BlogPostViewComponent, pathMatch: 'full'}
    ]),
    MarkdownModule.forChild(),
  ]
})
export class BlogPostViewModule { }
