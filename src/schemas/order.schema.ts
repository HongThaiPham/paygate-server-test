import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  orderId: string;

  @Prop()
  order_description: string;

  @Prop()
  order_status: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
