import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class PaymentResultDto {
  @IsString()
  @ApiProperty({ type: String })
  payment_id: string;

  @IsString()
  @ApiProperty({ type: String })
  payment_status: string;

  @IsString()
  @ApiProperty({ type: String })
  pay_address: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  price_amount: number;

  @IsString()
  @ApiProperty({ type: String })
  price_currency: string;

  @IsString()
  @ApiProperty({ type: String })
  pay_currency: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  pay_amount: number;

  @IsString()
  @ApiProperty({ type: String })
  order_id: string;

  @IsString()
  @ApiProperty({ type: String })
  order_description: string;

  @IsString()
  @ApiProperty({ type: String })
  created_at?: string;

  @IsString()
  @ApiProperty({ type: String })
  updated_at?: string;
}
