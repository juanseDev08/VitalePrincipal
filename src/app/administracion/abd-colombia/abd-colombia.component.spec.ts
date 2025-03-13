import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdColombiaComponent } from './abd-colombia.component';

describe('AbdColombiaComponent', () => {
  let component: AbdColombiaComponent;
  let fixture: ComponentFixture<AbdColombiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbdColombiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbdColombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
