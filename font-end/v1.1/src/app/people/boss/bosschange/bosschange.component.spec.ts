import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BosschangeComponent } from './bosschange.component';

describe('BosschangeComponent', () => {
  let component: BosschangeComponent;
  let fixture: ComponentFixture<BosschangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BosschangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BosschangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
