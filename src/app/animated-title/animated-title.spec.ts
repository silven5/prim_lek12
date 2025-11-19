import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTitle } from './animated-title';

describe('AnimatedTitle', () => {
  let component: AnimatedTitle;
  let fixture: ComponentFixture<AnimatedTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
