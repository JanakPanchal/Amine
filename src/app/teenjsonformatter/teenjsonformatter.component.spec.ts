import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenjsonformatterComponent } from './teenjsonformatter.component';

describe('TeenjsonformatterComponent', () => {
  let component: TeenjsonformatterComponent;
  let fixture: ComponentFixture<TeenjsonformatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeenjsonformatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenjsonformatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
