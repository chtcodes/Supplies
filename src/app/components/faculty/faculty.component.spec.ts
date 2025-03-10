import { ComponentFixture, TestBed } from '@angular/core/testing';

import { facultyComponent } from './faculty.component';

describe('facultyComponent', () => {
  let component:facultyComponent;
  let fixture: ComponentFixture<facultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [facultyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(facultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
