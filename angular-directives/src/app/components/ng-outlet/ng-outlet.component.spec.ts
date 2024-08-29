import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOutletComponent } from './ng-outlet.component';

describe('NgOutletComponent', () => {
  let component: NgOutletComponent;
  let fixture: ComponentFixture<NgOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgOutletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
