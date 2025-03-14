import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria/galeria.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';
import { ProductosProveedoresComponent } from './productos-proveedores/productos-proveedores.component';
import { PedidoComponent } from './pedido/pedido.component';
import { GalleriaModule } from 'primeng/galleria';
import { FooterComponent } from './footer/footer.component';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [
    GaleriaComponent,
    QueHacemosComponent,
    ProductosProveedoresComponent,
    PedidoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    PanelModule
    
  ],
  exports:[
    GaleriaComponent,
    QueHacemosComponent,
    ProductosProveedoresComponent,
    PedidoComponent,
    FooterComponent
  ]
})
export class ComponentesModule { }
