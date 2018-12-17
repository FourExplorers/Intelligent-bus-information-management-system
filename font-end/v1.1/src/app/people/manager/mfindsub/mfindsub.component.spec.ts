import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfindsubComponent } from './mfindsub.component';

describe('MfindsubComponent', () => {
  let component: MfindsubComponent;
  let fixture: ComponentFixture<MfindsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfindsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfindsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
