import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models/blog.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
  bloglist: Blog[] = [];
  errorMessage = '';
  loading = true;
  constructor( private apiService: ApiService) {
    this.apiService.getBlogList().subscribe(
      profile => {
        this.bloglist = profile;
        this.loading = false;
      },
      error => this.errorMessage = error as any
    );
   }

  ngOnInit() {
  }

}
