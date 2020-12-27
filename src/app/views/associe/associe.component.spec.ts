import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocieComponent } from './associe.component';

describe('AssocieComponent', () => {
  let component: AssocieComponent;
  let fixture: ComponentFixture<AssocieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssocieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssocieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
