import { IsNumber, IsString } from 'class-validator';

export class HostelRequest {
  @IsNumber()
  id: number;

  @IsString()
  hostelName: string;

  @IsString()
  hostelType: string;

  @IsString()
  address: string;

  @IsString()
  tel: string;

  @IsString()
  email: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;
}