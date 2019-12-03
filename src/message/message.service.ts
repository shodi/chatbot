import { Injectable, HttpService } from '@nestjs/common';
import { Config } from './../server/config';

@Injectable()
export class MessageService {

    public static readonly HOST = 'https://api.telegram.org/bot';

    constructor(private readonly config: Config,
                private readonly http: HttpService) {}

    public sendMessage(chatId: number, message: string): Promise<any> {
        const body = { chat_id: chatId, text: message };
        const url: string = MessageService.HOST + this.config.chatToken + '/sendMessage';
        return new Promise((resolve, reject) => {
            this.http.post(url, body)
                .subscribe(res => resolve(res.data), reject);
        });
    }
}