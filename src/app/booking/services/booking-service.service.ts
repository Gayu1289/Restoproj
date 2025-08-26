import { Injectable } from '@angular/core';
import { BookingRequest } from '../models/booking-request.js';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  constructor() { }}
export class BookingService {

  constructor() { }

  createBooking(bookingRequest : BookingRequest): void {
    console.log(bookingRequest)
}
}