import { Module, HttpModule } from '@nestjs/common';
import { Config_Token } from './server/config';
import { MessageController } from './message/message.controller';
import { MessageService } from './message/message.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AudioPhotoInterceptor } from './server/interceptor/audio-photo.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthController } from './server/health/health.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { RestaurantRepository_token } from './restaurant/restaurant.repository';

const { DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [__dirname + '/**/*.entity.*'],
      url: process.env.DATABASE_URL,
      ssl: true,
      logging: 'all'
    }),
    HttpModule
  ],
  controllers: [MessageController, HealthController],
  providers: [
    MessageService,
    RestaurantService,
    Config_Token,
    RestaurantRepository_token,
    { provide: APP_INTERCEPTOR, useClass: AudioPhotoInterceptor }
  ]
})
export class AppModule {}
