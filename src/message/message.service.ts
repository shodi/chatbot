import { Injectable, HttpService } from '@nestjs/common';
import { Config } from './../server/config';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Injectable()
export class MessageService {

    public static readonly HOST = 'https://api.telegram.org/bot';

    constructor(private readonly config: Config,
                private readonly http: HttpService,
                private readonly restaurantService: RestaurantService) {}

    public sendMessage(chatId: number, message: string): Promise<any> {
        const body = { chat_id: chatId, text: message };
        const url: string = MessageService.HOST + this.config.chatToken + '/sendMessage';
        return new Promise((resolve, reject) => {
            this.http.post(url, body)
                .subscribe(res => resolve(res.data), reject);
        });
    }

    public async indicateRestaurant(chatId: number, latitude: number, longetude: number): Promise<void> {
        const [restaurant, distance] = await this.restaurantService.getNearestRestaurant(latitude, longetude);
        const message = `Que tal visitar o '${restaurant.name}' na provincia ${restaurant.province}`;
        await this.sendMessage(chatId, message);
        if (restaurant.address) await this.sendMessage(chatId, `busque pelo endereço ${restaurant.address}`);
        let pagelink = 'para mais informações acesse';
        if (restaurant.facebookPageURL || restaurant.twitter) {
            pagelink = pagelink + (
                restaurant.twitter ?
                    ` o twitter ${restaurant.twitter}` :
                    ` a pagina do facebook ${restaurant.facebookPageURL}`);
            await this.sendMessage(chatId, pagelink);
        }
    }
}