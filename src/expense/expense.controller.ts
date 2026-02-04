import { Controller, Get } from '@nestjs/common';

@Controller('expense')
export class ExpenseController {

    @Get()
    getAllExpense(){
        return 'Expense API is working!';
    }
}
