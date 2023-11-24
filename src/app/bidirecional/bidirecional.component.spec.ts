import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirecionalComponent } from './bidirecional.component';

describe('BidirecionalComponent', () => {
  let component: BidirecionalComponent;
  let fixture: ComponentFixture<BidirecionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidirecionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BidirecionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
