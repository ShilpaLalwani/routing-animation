// <!-- * side list -->
// <aside class="side-list">
//   <!-- * side list toolbar -->
//   <div class="side-list-toolbar">
//     <span class="title">Articles</span>
//     <button class="btn" (click)="onAddItem()">Add</button>
//   </div>
//   <!-- * side list items-->
//   <div class="side-list-items">
//     <div
//       class="side-list-item" @listItemAnimation
//       *ngFor="let article of articleList; trackBy: contact?.id"
//       [ngClass]="{ 'side-list-item-selected': article.id == selectedArticle?.id }"
//       (click)="onSelectItem(article)"
//     >
//       <!-- <div class="side-list-item-avatar">
//         <img [src]="article.description" loading="lazy" alt="profile picture" />
//       </div> -->
//       <div class="side-list-item-info">
//         <p class="side-list-item-info-name">{{ article.name }}</p>
//         <p class="side-list-item-info-subtitle">{{ article.subtitle }}</p>
//       </div>
//     </div>
//   </div>
// </aside>
// <!-- * content wrapper -->
// <section class="side-list-content">
//   <!-- * content -->
//   <div class="side-list-content-data" *ngIf="!!selectedArticle" @sideContentAnimation>
//     <div class="side-list-content-data-inner">
//       <div class="side-list-content-data-overview">
//         <div class="side-list-content-data-overview-info">
//           <h3>{{ selectedArticle.name }}</h3>
//           <span>{{ selectedArticle.subtitle }}</span>
//         </div>
//         <!-- <div class="side-list-content-data-overview-description">
//           <img [src]="selectedArticle.description" loading="lazy" alt="profile picture" />
//         </div> -->
//       </div>
//       <div class="side-list-content-data-separator">
//         <h4>Overview</h4>
//         <div>
//           <button class="btn danger outline" (click)="onDeleteItem(selectedArticle)">
//             Delete
//           </button>
//         </div>
//       </div>
//       <p>{{ selectedArticle.description }}</p>
//     </div>
//   </div>
//   <!-- * empty selection -->
//   <div class="side-list-content-empty" *ngIf="!selectedContact">
//     <div>
//       <img alt="empty-selection" loading="lazy" src="https://img.icons8.com/ios/100/000000/nui2.png" />
//       <p>Select an item from the list.</p>
//     </div>
//   </div>
// </section>