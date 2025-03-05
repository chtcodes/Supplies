import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFormComponent } from './dform.component';

describe('DFormComponent', () => {
  let component: DFormComponent;
  let fixture: ComponentFixture<DFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
