import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', loadChildren: './blog/blog-view.module#BlogViewModule'},
      {path: 'post', loadChildren: './post/blog-post-view.module#BlogPostViewModule'},
    ]),
    MarkdownModule.forRoot()
  ]
})
export class BlogModule { }
