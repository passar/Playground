import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeLoopComponent } from './welcome-loop.component';

describe('WelcomeLoopComponent', () => {
  let component: WelcomeLoopComponent;
  let fixture: ComponentFixture<WelcomeLoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeLoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
