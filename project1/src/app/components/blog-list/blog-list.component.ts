import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { IBlog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BlogListComponent implements OnInit {

  public blogs: IBlog[] = [];
  constructor(private _blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this._blogService.getBlogs()
      .subscribe(data => this.blogs = data)
  }
  // onClick(blog: any){
  //   console.log(blog.id)
  //   this.router.navigate(['/bloglist', blog.id])
  // }
}
