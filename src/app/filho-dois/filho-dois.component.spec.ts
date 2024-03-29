import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoDoisComponent } from './filho-dois.component';

describe('FilhoDoisComponent', () => {
  let component: FilhoDoisComponent;
  let fixture: ComponentFixture<FilhoDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoDoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilhoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
