import { Component, Input, OnInit } from '@angular/core';

import { SearchResult } from '../resi-search-result.class';

@Component({
  selector: 'resi-search-item',
  templateUrl: './resi-search-item.component.html',
  styleUrls: ['./resi-search-item.component.css']
})
export class ResiSearchItemComponent implements OnInit {
  @Input('item') result: SearchResult;
  @Input('domain') urlRoot: string;

  constructor() { }

  public static getTypeClass(type) {
    switch(type) {
    case 'question': return {'fa-comment-o':true};
    case 'article':  return {'fa-file-text-o':true};
    case 'document': return {'fa-book':true};
    }
    return {};
  }

  public getClassFromType(type) {
    return ResiSearchItemComponent.getTypeClass(type);
  }
    
  ngOnInit() {
  
  }

}
