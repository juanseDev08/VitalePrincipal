import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) }, { path: 'quienes-somos', loadChildren: () => import('./quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule) }, { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) }, { path: 'adb-colombia', loadChildren: () => import('./abd-colombia/abd-colombia.module').then(m => m.AbdColombiaModule) }, { path: 'fotos', loadChildren: () => import('./fotos/fotos.module').then(m => m.FotosModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
