import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from './models/blog';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  Blogs_API = 'http://127.0.0.1:8000/api/blogs/';
  Blog_API = 'http://127.0.0.1:8000/api/blog/';
  constructor(private http: HttpClient) { }

  getBlogs(): Observable<IBlog[]>{
    //fetch data from API
    // return this.http.get<any[]>(this.Blogs_API);
    return this.http.get<IBlog[]>(this.Blogs_API).pipe(
      map(blogs => blogs.map(blog => {
        return {
          id: blog.id,
          author: blog.author,
          blog_title: blog.blog_title,
          blog_description: blog.blog_description,
          publish_date: blog.publish_date,
          blog_picture: blog.blog_picture,
          content: blog.content,
        }
      }))
    )

  }

  getBlog(id: any): Observable<IBlog>{
    //fetch data from API
    // return this.http.get<any[]>(this.Blogs_API);
    return this.http.get<IBlog>(this.Blog_API+id)

  }


}
