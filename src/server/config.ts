import { readFileSync } from 'fs';

export class Config {
    
    private BOT_TOKEN: string;

    constructor() {
        this.BOT_TOKEN =
            readFileSync('./src/server/credentials/bot.token').toString();
    }

    public get chatToken(): string {
        return this.BOT_TOKEN;
    }
}

export const Config_Token = {
    provide: Config,
    useValue: new Config()
}