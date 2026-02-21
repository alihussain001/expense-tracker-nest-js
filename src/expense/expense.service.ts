import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpenseService {
  private expense = [
    {
      id: 1,
      amount: 500,
      category: 'Food',
      date: '2026-02-01',
    },
    {
      id: 2,
      amount: 1200,
      category: 'Transport',
      date: '2026-02-02',
    },
  ];

  getAllExpenses(){
    return this.expense;
  }

 
  addExpense(expense: {amount: number; category: string; date: string}){
    const newExpense ={
      id: this.expense.length + 1,
      ...expense,
    };
    this.expense.push(newExpense);
    return newExpense;
  }
}
