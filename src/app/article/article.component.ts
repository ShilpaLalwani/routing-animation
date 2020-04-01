import { Component } from '@angular/core';
import { animate, style, group, query, transition, trigger, state } from '@angular/animations';
import {Article, ARTICLE_MOCK} from './article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('noEnterAnimation', [transition(':enter', [])]),
    trigger('listItemAnimation', [
      
      
    ]),
    trigger('animateText', [
      transition(':enter', [
        // we set the width of the outer container to 0, and hide the
        // overflow (so the inner container won't be visible)
        style({ opacity:0}),
        group([
          // we animate the outer container width to it's original value
          animate('0.6s ease-in-out', style({ opacity:0})),
          // in the same time we translate the inner element all the
          // way from left to right
          // query('.side-list-content-data-inner', [
          //   style({ transform: 'translateX(-110%)' }),
          //   group([animate('550ms ease-out', style({ transform: 'translateX(-10%)' }))]),
          // ]),
        ]),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        group([
          animate('250ms ease-out', style({ width: '0' })),
          query('.side-list-content-data-inner', [
            style({ transform: 'translateX(-0%)' }),
            group([animate('250ms ease-out', style({ transform: 'translateX(-110%)' }))]),
          ]),
        ]),
      ]),
    ]),
    trigger('emptyContentAnimation', [
      transition(':leave', [
        style({ opacity: '1' }),
        group([animate('250ms ease-out', style({ opacity: '0', width: '0px' }))]),
      ]),
      transition(':enter', [
        style({ opacity: '0', width: '0px' }),
        group([animate('500ms ease-in', style({ opacity: '1', width: '!' }))]),
      ]),
    ]),
  ],
})
export class articleComponent {
  articleList: Article[] = ARTICLE_MOCK;
  selectedArticle: Article;

  onSelectItem(article: Article) {
    
    this.selectedArticle =  article? { ...article } : null;
  }

  onAddItem() {
    const rndNum = Date.now();
    const newArticle: Article = {
      id: this.articleList.length * rndNum,
      name: `Lorem ipsum.`,
      subtitle: `More lorem ipsum bacon ipsum.`,
      description: `Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.`,
    };
    // * adding a new contact to the article
    this.articleList = [newArticle, ...this.articleList];
    // * selecting the newly created contact
    this.onSelectItem(newArticle);
  }

  onDeleteItem(article: Article) {
    // * removing a contact from the article
    this.articleList = this.articleList.filter(c => c.id != article.id);
    if (this.selectedArticle && this.selectedArticle.id == article.id) {
      // * if the removed contact is beaing focused on, then we remove the focus
      this.onSelectItem(null);
    }
  }
}