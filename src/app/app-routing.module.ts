
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './registration/user-registration/user-register.component';
import { BookTableComponent } from './booking/book-table/book-table.component';
import { HomeComponent } from './shared/home/home.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
   {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'booking',
    component: BookTableComponent
  },
  {
  path: 'restaurants',
  component: RestaurantListComponent
},
{
  path: 'restaurant/:id',
  component: RestaurantDetailComponent
},
  
{
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
