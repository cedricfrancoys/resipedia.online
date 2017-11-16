import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiItemScoreComponent } from './resi-item-score.component';

describe('ResiItemScoreComponent', () => {
  let component: ResiItemScoreComponent;
  let fixture: ComponentFixture<ResiItemScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiItemScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiItemScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
