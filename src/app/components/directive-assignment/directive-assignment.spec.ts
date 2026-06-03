import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAssignment } from './directive-assignment';

describe('DirectiveAssignment', () => {
  let component: DirectiveAssignment;
  let fixture: ComponentFixture<DirectiveAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveAssignment],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveAssignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
