import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflammatoryBreastCancerComponent } from './inflammatory-breast-cancer.component';

describe('InflammatoryBreastCancerComponent', () => {
  let component: InflammatoryBreastCancerComponent;
  let fixture: ComponentFixture<InflammatoryBreastCancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflammatoryBreastCancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflammatoryBreastCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
