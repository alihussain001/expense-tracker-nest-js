import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/creeate-expense.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  getAllExpense() {
    return this.expenseService.getAllExpenses();
  }

  @Post()
  addExpense(@Body() body: CreateExpenseDto){
    return this.expenseService.addExpense(body);
  }
}
