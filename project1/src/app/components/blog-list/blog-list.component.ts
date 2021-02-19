import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { IBlog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogs: IBlog[] = [];
  constructor(private _blogService: BlogService) { }

  ngOnInit(): void {
    this._blogService.getBlogs()
      .subscribe(data => this.blogs = data)
  }

}
