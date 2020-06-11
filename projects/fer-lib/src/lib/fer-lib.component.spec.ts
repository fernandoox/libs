import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerLibComponent } from './fer-lib.component';

describe('FerLibComponent', () => {
  let component: FerLibComponent;
  let fixture: ComponentFixture<FerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
