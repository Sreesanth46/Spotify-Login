import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testgrid2Component } from './testgrid2.component';

describe('Testgrid2Component', () => {
  let component: Testgrid2Component;
  let fixture: ComponentFixture<Testgrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testgrid2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testgrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
