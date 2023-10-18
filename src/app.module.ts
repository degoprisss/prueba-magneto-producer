import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerModule } from './infrastructure/ioc/producer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProducerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
