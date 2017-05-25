import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticlistComponent } from './diagnosticlist.component';

describe('DiagnosticlistComponent', () => {
  let component: DiagnosticlistComponent;
  let fixture: ComponentFixture<DiagnosticlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
