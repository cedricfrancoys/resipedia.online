import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resi-search-item-score',
  templateUrl: './resi-search-item-score.component.html',
  styleUrls: ['./resi-search-item-score.component.css']
})
export class ResiSearchItemScoreComponent implements OnInit {
  @Input('value') value : number;
  @Input('icon') icon : string;  

  public getClass() {
    switch(this.icon){
    case 'score': return {'fa-check-circle':true, 'text-success': true};
    case 'views': return {'fa-eye':true};
    case 'votesup': return {'fa-thumbs-o-up':true};
    case 'votesdown': return {'fa-thumbs-o-down':true};
    }
    return {};
  }

  constructor() { }

  ngOnInit() {
  }

}
