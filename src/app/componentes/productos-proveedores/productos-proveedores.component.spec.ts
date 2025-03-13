import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosProveedoresComponent } from './productos-proveedores.component';

describe('ProductosProveedoresComponent', () => {
  let component: ProductosProveedoresComponent;
  let fixture: ComponentFixture<ProductosProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosProveedoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
