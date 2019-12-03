import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private readonly service: MessageService) { }

    @Post()
    public async getMessage(@Body() message): Promise<any> {
        console.log(message);
    }
}