import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria/galeria.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { ProductosProveedoresComponent } from './productos-proveedores/productos-proveedores.component';
import { PedidoComponent } from './pedido/pedido.component';
import { GalleriaModule } from 'primeng/galleria';


@NgModule({
  declarations: [
    GaleriaComponent,
    QueHacemosComponent,
    ProductosProveedoresComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    
  ],
  exports:[
    GaleriaComponent,
    QueHacemosComponent,
    ProductosProveedoresComponent,
    PedidoComponent
  ]
})
export class ComponentesModule { }
