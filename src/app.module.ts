import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { Config_Token } from './server/config';
import { MessageController } from './message/message.controller';
import { MessageService } from './message/message.service';

const { DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

@Module({
  imports: [HttpModule],
  controllers: [MessageController],
  providers: [MessageService, Config_Token]
})
export class AppModule {}
