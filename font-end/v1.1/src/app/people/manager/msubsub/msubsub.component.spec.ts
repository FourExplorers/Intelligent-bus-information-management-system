import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsubsubComponent } from './msubsub.component';

describe('MsubsubComponent', () => {
  let component: MsubsubComponent;
  let fixture: ComponentFixture<MsubsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsubsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsubsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
