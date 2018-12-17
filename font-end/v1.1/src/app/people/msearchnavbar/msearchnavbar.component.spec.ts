import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsearchnavbarComponent } from './msearchnavbar.component';

describe('MsearchnavbarComponent', () => {
  let component: MsearchnavbarComponent;
  let fixture: ComponentFixture<MsearchnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsearchnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsearchnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
