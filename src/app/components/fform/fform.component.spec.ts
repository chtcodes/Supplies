import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FFormComponent } from './fform.component';

describe('FFormComponent', () => {
  let component: FFormComponent;
  let fixture: ComponentFixture<FFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
