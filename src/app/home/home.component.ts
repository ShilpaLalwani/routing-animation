import { Component, OnInit } from '@angular/core';
import {Article, ARTICLE_MOCK} from './articleList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleList: Article[] = ARTICLE_MOCK;
  selectedArticle: Article;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDetail(article: Article): void {
    let link = ['/article', article.id];
    this.router.navigate(link);
  }
}