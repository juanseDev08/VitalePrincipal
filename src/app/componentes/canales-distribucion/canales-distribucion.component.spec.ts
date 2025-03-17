import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalesDistribucionComponent } from './canales-distribucion.component';

describe('CanalesDistribucionComponent', () => {
  let component: CanalesDistribucionComponent;
  let fixture: ComponentFixture<CanalesDistribucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CanalesDistribucionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanalesDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
