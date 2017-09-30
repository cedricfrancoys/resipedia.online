import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiSearchComponent } from './resi-search.component';

describe('ResiSearchComponent', () => {
  let component: ResiSearchComponent;
  let fixture: ComponentFixture<ResiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
