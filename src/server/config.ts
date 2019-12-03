import { readFileSync } from 'fs';

export class Config {
    
    private BOT_TOKEN: string;

    constructor() {
        console.log('************** CONFIG INIT **************');
        this.BOT_TOKEN = readFileSync(process.env.TOKEN_PATH).toString();
    }

    public get chatToken(): string {
        return this.BOT_TOKEN;
    }
}

export const Config_Token = {
    provide: Config,
    useValue: new Config()
}