import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsublineComponent } from './msubline.component';

describe('MsublineComponent', () => {
  let component: MsublineComponent;
  let fixture: ComponentFixture<MsublineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsublineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsublineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
