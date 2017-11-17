import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { SearchResult } from './resi-search-result.class';
import { ResiSearchItemComponent } from './resi-search-item/resi-search-item.component';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    if (term === '') {
      return Observable.of([]);
    }

    let url = 'http://www.resiway.gdn/index.php?get=resiway_search';

    return this.http.get(url, {
      params: new HttpParams().set('q', term)
    });
  }
    
}



@Component({
  selector: 'resi-search',
  templateUrl: './resi-search.component.html',
  styleUrls: ['./resi-search.component.css'],
  providers: [SearchService],  
})
export class ResiSearchComponent implements OnInit {
  public readonly urlRoot: string = 'https://www.resiway.org';
  public query: string;
  public results: Array<SearchResult> = [];

  public overlay: Object = {
    visible: false,
    show: function (state) {
      this.visible = state;
    }
  }

  constructor(private searchService: SearchService) {

  }

  public getClassFromType(type) {
    return ResiSearchItemComponent.getTypeClass(type);
  }

  public initSearch: Function = (text$: Observable<string>) => {
    return text$
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap(query =>   
              this.searchService.search(query)              
              .map( (response) => {
                      this.results = response['result']; 
                      return this.results.slice(0, 4);
                    }, 
                    (error) => {
                      console.log('error querying server'); 
                      return [];
                    }
              )  
    );

  }


  public queryFormatter: Function = (q: any) => {
    if(q instanceof Object) {
      return q.title;
    }
    return q;
  }

  ngOnInit() : void {

  }

}
