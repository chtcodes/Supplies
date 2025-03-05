import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFormComponent } from './sform.component';

describe('SFormComponent', () => {
  let component: SFormComponent;
  let fixture: ComponentFixture<SFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
