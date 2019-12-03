import { Module, HttpModule } from '@nestjs/common';
import { Config_Token } from './server/config';
import { MessageController } from './message/message.controller';
import { MessageService } from './message/message.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AudioPhotoInterceptor } from './server/interceptor/audio-photo.interceptor';

const { DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

@Module({
  imports: [HttpModule],
  controllers: [MessageController],
  providers: [MessageService, Config_Token, { provide: APP_INTERCEPTOR, useClass: AudioPhotoInterceptor }]
})
export class AppModule {}
