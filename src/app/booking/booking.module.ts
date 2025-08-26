import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';  

import { BookingRoutingModule } from './booking-routing.module';
import { BookTableComponent } from './book-table/book-table.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: BookTableComponent }  // default child route
];


@NgModule({
  declarations: [
    BookTableComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  

})
export class BookingModule { }