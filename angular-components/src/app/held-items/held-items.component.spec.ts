import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeldItemsComponent } from './held-items.component';

describe('HeldItemsComponent', () => {
  let component: HeldItemsComponent;
  let fixture: ComponentFixture<HeldItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeldItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeldItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
