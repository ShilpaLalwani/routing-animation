import { Component, OnInit } from '@angular/core';
import {Article, ARTICLE_MOCK} from './articleList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleList: Article[] = ARTICLE_MOCK;
  selectedArticle: Article;
  constructor() { }

  ngOnInit() {
  }

}