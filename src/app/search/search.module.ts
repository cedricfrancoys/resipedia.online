import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ResiSearchComponent } from './resi-search/resi-search.component';
import { ResiSearchItemComponent } from './resi-search/resi-search-item/resi-search-item.component';
import { ResiSearchItemScoreComponent } from './resi-search/resi-search-item/resi-search-item-score/resi-search-item-score.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [    
    ResiSearchComponent,
    ResiSearchItemComponent,
    ResiSearchItemScoreComponent
  ],
  exports:[
    ResiSearchComponent
  ]
})
export class SearchModule { }
