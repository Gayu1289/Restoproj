import { Injectable } from '@angular/core';
import { Restaurant } from '../app/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants: Restaurant[] = [
    { id: 1, name: 'Vaishali', location: 'FC Road, Pune', rating: 4.5, price: '₹500 for two', hours: '8 AM - 11 PM', imageUrl: 'https://live.staticflickr.com/8423/7637735866_15f3ee336a_b.jpg' },
    { id: 2, name: 'German Bakery', location: 'Koregaon Park, Pune', rating: 4.5, price: '₹800 for two', hours: '8 AM - 11 PM', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f5/ae/35/outdoor-seating.jpg?w=900&h=500&s=1' },
    { id: 3, name: 'Shabree', location: 'JM Road, Pune', rating: 4.3, price: '₹600 for two', hours: '11 AM - 10 PM', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/89/39/29/outdoor.jpg?w=400&h=300&s=1' },
    { id: 4, name: 'Baan Tao', location: 'Kalyani Nagar, Pune', rating: 4.7, price: '₹400 for two', hours: '7 AM - 11 PM', imageUrl: 'https://b.zmtcdn.com/data/pictures/4/11264/f263dd04a114805d7e9479c262cf8f60.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*' }
  ];

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  getRestaurantById(id: number): Restaurant | undefined {
    return this.restaurants.find(r => r.id === id);
  }
}
