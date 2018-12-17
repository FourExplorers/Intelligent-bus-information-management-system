import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossnavbarComponent } from './bossnavbar.component';

describe('BossnavbarComponent', () => {
  let component: BossnavbarComponent;
  let fixture: ComponentFixture<BossnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
