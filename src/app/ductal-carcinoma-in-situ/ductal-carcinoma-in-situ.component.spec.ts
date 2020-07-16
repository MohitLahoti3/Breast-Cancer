import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctalCarcinomaInSituComponent } from './ductal-carcinoma-in-situ.component';

describe('DuctalCarcinomaInSituComponent', () => {
  let component: DuctalCarcinomaInSituComponent;
  let fixture: ComponentFixture<DuctalCarcinomaInSituComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuctalCarcinomaInSituComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuctalCarcinomaInSituComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
