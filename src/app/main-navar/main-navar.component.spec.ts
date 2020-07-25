import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavarComponent } from './main-navar.component';

describe('MainNavarComponent', () => {
  let component: MainNavarComponent;
  let fixture: ComponentFixture<MainNavarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
