import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirststageComponent } from './firststage.component';

describe('FirststageComponent', () => {
  let component: FirststageComponent;
  let fixture: ComponentFixture<FirststageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirststageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirststageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
