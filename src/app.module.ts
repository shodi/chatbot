import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { Config_Token } from './server/config';

const { DATABASE_USERNAME, DATABASE_PASSWORD } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot(<SqliteConnectionOptions>{
      type: 'sqlite',
      database: './src/database/db',
      entities: [],
      logging: true
    })
  ],
  providers: [Config_Token]
})
export class AppModule {}
