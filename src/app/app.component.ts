import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement , link: HTMLInputElement) {
    console.log(`Adding Article Title: ${title.value} and link ${link.value}`);
    return false;
  }
}
