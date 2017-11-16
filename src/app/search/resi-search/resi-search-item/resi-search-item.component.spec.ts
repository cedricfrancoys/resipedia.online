import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiSearchItemComponent } from './resi-search-item.component';

describe('ResiSearchItemComponent', () => {
  let component: ResiSearchItemComponent;
  let fixture: ComponentFixture<ResiSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
