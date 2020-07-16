import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetastaticBreastCancerComponent } from './metastatic-breast-cancer.component';

describe('MetastaticBreastCancerComponent', () => {
  let component: MetastaticBreastCancerComponent;
  let fixture: ComponentFixture<MetastaticBreastCancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetastaticBreastCancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetastaticBreastCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
