import { Controller, Post, Get, Body, Param, Logger, HttpCode, HttpStatus } from '@nestjs/common';
import { MessageService } from './message.service';
import { IMessage } from './message';
import { RestaurantService } from './../restaurant/restaurant.service';

@Controller('message')
export class MessageController {

    private logger = new Logger(MessageController.name);

    constructor(private readonly messageService: MessageService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    public async getMessage(@Body() req: IMessage): Promise<any> {
        this.logger.log(req);
        const chatId = req.message.chat.id;
        if (req.message.location) {
            const {latitude, longitude} = req.message.location;
            await this.messageService.indicateRestaurant(chatId, latitude, longitude);
        }
    }

    @Get(':msg')
    @HttpCode(HttpStatus.OK)
    public async sendMessage(@Param('msg') text: string): Promise<any> {
        await this.getMessage(
            { 
                message: { 
                    chat: { 
                        id: 751795065
                    }, location: {
                        latitude: 35.34,
                        longitude: -95.29
                    }
                }
            } as any);
        return await this.messageService.sendMessage(751795065, text);
    }
}