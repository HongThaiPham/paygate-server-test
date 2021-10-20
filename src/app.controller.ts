import { Payment } from './schemas/payment.schema';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePaymentDto } from './dto/CreatePaymentDto';
import { PaymentResultDto } from './dto/PaymentResultDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('payment')
  async createPayment(@Body() request: CreatePaymentDto): Promise<Payment> {
    return this.appService.createPayment(request);
  }
}
