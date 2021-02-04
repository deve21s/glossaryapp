import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgComponent } from './addg.component';

describe('AddgComponent', () => {
  let component: AddgComponent;
  let fixture: ComponentFixture<AddgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
