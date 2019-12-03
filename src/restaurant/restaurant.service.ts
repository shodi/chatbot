import { Injectable } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { RestaurantRepository } from './restaurant.repository';

@Injectable()
export class RestaurantService {

    constructor(private readonly repository: RestaurantRepository) {}

    public async getRestaurantByDistance(): Promise<Restaurant> {
        return new Restaurant();
    }
}