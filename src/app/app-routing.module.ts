import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-register',
    loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterPageModule)
  },
  {
    path: 'tabs/:id',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-update/:id',
    loadChildren: () => import('./pages/user-update/user-update.module').then( m => m.UserUpdatePageModule)
  },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  // },
  {
    path: 'user/:id',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },

  // {
  //   path: 'service',
  //   loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  // }
  // ,
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
