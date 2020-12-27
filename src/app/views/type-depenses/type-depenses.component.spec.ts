import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDepensesComponent } from './type-depenses.component';

describe('TypeDepensesComponent', () => {
  let component: TypeDepensesComponent;
  let fixture: ComponentFixture<TypeDepensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDepensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
