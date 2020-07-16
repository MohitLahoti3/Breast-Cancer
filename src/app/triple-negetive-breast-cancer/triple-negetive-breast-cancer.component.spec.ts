import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleNegetiveBreastCancerComponent } from './triple-negetive-breast-cancer.component';

describe('TripleNegetiveBreastCancerComponent', () => {
  let component: TripleNegetiveBreastCancerComponent;
  let fixture: ComponentFixture<TripleNegetiveBreastCancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleNegetiveBreastCancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleNegetiveBreastCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
