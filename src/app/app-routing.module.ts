import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:username',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'subir-producto/:username',
    loadChildren: () => import('./subir-producto/subir-producto.module').then( m => m.SubirProductoPageModule)
  },
  {
    path: 'ver-productos',
    loadChildren: () => import('./ver-productos/ver-productos.module').then( m => m.VerProductosPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mis-productos/:username',
    loadChildren: () => import('./mis-productos/mis-productos.module').then( m => m.MisProductosPageModule)
  },
  {
    path: 'modificar-productos/:id/:username',
    loadChildren: () => import('./modificar-productos/modificar-productos.module').then( m => m.ModificarProductosPageModule)
  },
  {
    path: 'likes/:username',
    loadChildren: () => import('./likes/likes.module').then( m => m.LikesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
