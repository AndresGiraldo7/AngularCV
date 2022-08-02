import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyReferenceComponent } from './family-reference.component';

describe('FamilyReferenceComponent', () => {
  let component: FamilyReferenceComponent;
  let fixture: ComponentFixture<FamilyReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
