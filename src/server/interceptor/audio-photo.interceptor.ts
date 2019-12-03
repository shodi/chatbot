import { NestInterceptor, ExecutionContext, CallHandler, Inject, forwardRef, Logger } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/message/message.service';
import { IMessage } from 'src/message/message';

export class AudioPhotoInterceptor implements NestInterceptor {
    
    private readonly logger = new Logger(AudioPhotoInterceptor.name);

    constructor(
        @Inject(forwardRef(() => MessageService))
        private readonly messageService: MessageService) { }
    
    public async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const body: IMessage = context.switchToHttp().getRequest().body;
        if(body.message && (body.message.hasOwnProperty('voice') || body.message.hasOwnProperty('photo'))) {
            const chatId: number = body.message.chat.id;
            const message = 'Ainda não estamos trabalhando com audio e fotos 🌚';
            await this.messageService.sendMessage(chatId, message);
            return of();
        }
        return next.handle();
    }
}