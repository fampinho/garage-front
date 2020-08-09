import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'tabs/:id',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'user-register',
    loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterPageModule)
  },
  {
    path: 'user-update/:id',
    loadChildren: () => import('./pages/user-update/user-update.module').then(m => m.UserUpdatePageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./pages/staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'staff/:id',
    loadChildren: () => import('./pages/staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'staff-update/:id',
    loadChildren: () => import('./pages/staff-update/staff-update.module').then(m => m.StaffUpdatePageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'booking/:id',
    loadChildren: () => import('./pages/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'booking-view',
    loadChildren: () => import('./pages/booking-view/booking-view.module').then( m => m.BookingViewPageModule)
  },
  {
    path: 'booking-view/:id',
    loadChildren: () => import('./pages/booking-view/booking-view.module').then( m => m.BookingViewPageModule)
  },
  {
    path: 'booking-view/:appointment/:id/:type/:maker/:model/:fuel/:manufacture/:licenceNumber/:name/:midName/:surname/:phone/:email/:ppsn',
    loadChildren: () => import('./pages/booking-view/booking-view.module').then( m => m.BookingViewPageModule)
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
