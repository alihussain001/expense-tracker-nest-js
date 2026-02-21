import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense{
    @Prop({required: true})
    amount!: number;

    @Prop({required: true})
    category!: true;

    @Prop({required: true})
    date!: string;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);