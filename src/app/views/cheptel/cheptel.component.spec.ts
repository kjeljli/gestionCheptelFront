import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheptelComponent } from './cheptel.component';

describe('CheptelComponent', () => {
  let component: CheptelComponent;
  let fixture: ComponentFixture<CheptelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheptelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheptelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
