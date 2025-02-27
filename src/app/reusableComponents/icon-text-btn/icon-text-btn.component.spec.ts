import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTextBtnComponent } from './icon-text-btn.component';

describe('IconTextBtnComponent', () => {
  let component: IconTextBtnComponent;
  let fixture: ComponentFixture<IconTextBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTextBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTextBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
