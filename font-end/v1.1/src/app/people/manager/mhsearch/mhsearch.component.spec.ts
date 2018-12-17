import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhsearchComponent } from './mhsearch.component';

describe('MhsearchComponent', () => {
  let component: MhsearchComponent;
  let fixture: ComponentFixture<MhsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
