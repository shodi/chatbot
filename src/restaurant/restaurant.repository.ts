import { EntityRepository, Repository, getCustomRepository, getConnection, getRepository, Connection } from 'typeorm';
import { Restaurant } from './restaurant.entity';


export const RestaurantRepository_token = {
    provide: 'restaurant',
    useFactory: (conn: Connection) => conn.getRepository(Restaurant),
    inject: [Connection]
}