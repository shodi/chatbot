import { Injectable, Inject } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {

    constructor(
        @Inject('restaurant')
        private readonly repository: Repository<Restaurant>) {}

    public async getNearestRestaurant(latitude: number, longetude: number): Promise<[Restaurant, number]> {
        const restaurants: Array<Restaurant> = await this.repository.find();
        const nearest: { distance: number, restaurant?: Restaurant } = { distance: Infinity };

        restaurants.forEach(restaurant => {
            const currentDistance = Math.sqrt(
                Math.pow(latitude - restaurant.latitude, 2) + 
                Math.pow(longetude - restaurant.longetude, 2));
            if (nearest.distance > currentDistance) {
                nearest.distance = currentDistance;
                nearest.restaurant = restaurant;
            }
        });

        return [nearest.restaurant, nearest.distance];
    }
}