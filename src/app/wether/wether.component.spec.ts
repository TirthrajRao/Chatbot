import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetherComponent } from './wether.component';

describe('WetherComponent', () => {
  let component: WetherComponent;
  let fixture: ComponentFixture<WetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
