import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/CreatePaymentDto';

import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './schemas/payment.schema';
@Injectable()
export class AppService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async createPayment(request: CreatePaymentDto): Promise<Payment> {
    const newPayment = new this.paymentModel({
      ...request,

      payment_status: 'pending',
      pay_address: uuidv4(),
      pay_amount: 0.1,
    });
    return newPayment.save();
  }
}
