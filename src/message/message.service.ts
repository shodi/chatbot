import { Injectable } from '@nestjs/common';
import { Config } from 'src/server/config';

@Injectable()
export class MessageService {
    constructor(private readonly config: Config) {}

    
}