import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDataComponent } from './cust-data.component';

describe('CustDataComponent', () => {
  let component: CustDataComponent;
  let fixture: ComponentFixture<CustDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
