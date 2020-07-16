import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvasiveDuctalCarcinomaComponent } from './invasive-ductal-carcinoma.component';

describe('InvasiveDuctalCarcinomaComponent', () => {
  let component: InvasiveDuctalCarcinomaComponent;
  let fixture: ComponentFixture<InvasiveDuctalCarcinomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvasiveDuctalCarcinomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvasiveDuctalCarcinomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
