import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @ApiProperty({ type: Number })
  price_amount: number;

  @IsString()
  @ApiProperty({ type: String })
  price_currency: string;

  @IsString()
  @ApiProperty({ type: String })
  pay_currency: string;

  @IsString()
  @ApiProperty({ type: String })
  order_id: string;

  @IsString()
  @ApiProperty({ type: String })
  order_description: string;
}
