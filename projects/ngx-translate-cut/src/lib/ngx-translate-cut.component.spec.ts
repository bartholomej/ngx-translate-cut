import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTranslateCutComponent } from './ngx-translate-cut.component';

describe('NgxTranslateCutComponent', () => {
  let component: NgxTranslateCutComponent;
  let fixture: ComponentFixture<NgxTranslateCutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTranslateCutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTranslateCutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
