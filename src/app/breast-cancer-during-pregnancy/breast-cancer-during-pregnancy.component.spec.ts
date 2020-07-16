import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastCancerDuringPregnancyComponent } from './breast-cancer-during-pregnancy.component';

describe('BreastCancerDuringPregnancyComponent', () => {
  let component: BreastCancerDuringPregnancyComponent;
  let fixture: ComponentFixture<BreastCancerDuringPregnancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreastCancerDuringPregnancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreastCancerDuringPregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
