import { Controller, Post, Get, Body, Param, Logger, HttpCode, HttpStatus } from '@nestjs/common';
import { MessageService } from './message.service';
import { IMessage } from './message';

@Controller('message')
export class MessageController {

    private logger = new Logger(MessageController.name);

    constructor(private readonly service: MessageService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    public async getMessage(@Body() req: IMessage): Promise<any> {
        this.logger.log(req);
        await this.service.sendMessage(req.message.chat.id, req.message.text.toUpperCase());
    }

    @Get(':msg')
    @HttpCode(HttpStatus.OK)
    public async sendMessage(@Param('msg') text: string): Promise<any> {
        return await this.service.sendMessage(751795065, text);
    }
}