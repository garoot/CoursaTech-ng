import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  name = 'Angular Lovers';

constructor(
    private title: Title,
    private meta: Meta
) {}

ngOnInit() {
    this.title.setTitle('Dynamic Hello Angular Lovers Title');
    this.meta.updateTag({charset:'UTF-8', name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
}
}