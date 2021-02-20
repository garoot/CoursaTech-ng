import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { IBlog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  public blogs: IBlog[] = [];
  constructor(private _blogService: BlogService) { }
  
  ngOnInit(): void {
    this._blogService.getBlogs()
      .subscribe(data => this.blogs = data)
  }

}
