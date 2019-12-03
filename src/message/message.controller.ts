import { Controller, Post, Get, Body, Param, Logger, HttpCode, HttpStatus } from '@nestjs/common';
import { MessageService } from './message.service';
import { IMessage } from './message';
import { RestaurantService } from './../restaurant/restaurant.service';

@Controller('message')
export class MessageController {

    private logger = new Logger(MessageController.name);

    constructor(
        private readonly messageService: MessageService,
        private readonly restaurantService: RestaurantService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    public async getMessage(@Body() req: IMessage): Promise<any> {
        this.logger.log(req);
        const chatId = req.message.chat.id;
        this.restaurantService.getRestaurantByDistance();
        await this.messageService.sendMessage(chatId, req.message.text.toUpperCase());
    }

    @Get(':msg')
    @HttpCode(HttpStatus.OK)
    public async sendMessage(@Param('msg') text: string): Promise<any> {
        return await this.messageService.sendMessage(751795065, text);
    }
}