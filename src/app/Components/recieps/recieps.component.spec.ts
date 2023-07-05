import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepsComponent } from './recieps.component';

describe('ReciepsComponent', () => {
  let component: ReciepsComponent;
  let fixture: ComponentFixture<ReciepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciepsComponent]
    });
    fixture = TestBed.createComponent(ReciepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
