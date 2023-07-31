import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSetComponent } from './location-set.component';

describe('LocationSetComponent', () => {
  let component: LocationSetComponent;
  let fixture: ComponentFixture<LocationSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationSetComponent]
    });
    fixture = TestBed.createComponent(LocationSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
