import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop()
  payment_status: string;

  @Prop()
  pay_address: string;

  @Prop()
  price_amount: number;

  @Prop()
  price_currency: string;

  @Prop()
  pay_currency: string;

  @Prop()
  order_id: string;

  @Prop()
  order_description: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
