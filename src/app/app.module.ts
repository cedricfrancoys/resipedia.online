import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { TabSearchComponent } from './tab-search/tab-search.component';
import { TabArticleComponent } from './tab-article/tab-article.component';
import { TabQuestionComponent } from './tab-question/tab-question.component';
import { TabDocumentComponent } from './tab-document/tab-document.component';

const appRoutes: Routes = [
  { path: 'recherche', component: TabSearchComponent },
  { path: 'article', component: TabArticleComponent },
  { path: 'question', component: TabQuestionComponent },
  { path: 'document', component: TabDocumentComponent },  
  {
    path: '',
    redirectTo: '/recherche',
    pathMatch: 'full'
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    TabSearchComponent,
    TabArticleComponent,
    TabQuestionComponent,
    TabDocumentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule.forRoot(),
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
