import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseModule } from './expense/expense.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/expense-tracker'), ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
