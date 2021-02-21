import { Component, OnInit } from '@angular/core';
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { IBlog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  public blogs: IBlog[] = [];
  public blogId: any = null;
  public blog: IBlog = <IBlog>{}

  // public blog: IBlog = {}; 

  constructor(
    private _blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    // public id: number,
    // public blog: IBlog
    ) { }
  
  ngOnInit(): void {

    this.blogId = this.activatedRoute.snapshot.params.id

    this._blogService.getBlog(this.blogId)
      .subscribe(data => this.blog = data)

      // automatically scroll to top of page when loaded
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });

      // this.blog = this.blogs.find(blog => blog.id === this.blogId)
  }

}
