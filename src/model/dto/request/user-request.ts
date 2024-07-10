import { IsNumber, IsString } from 'class-validator';

export class UserRequest {
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  email: string;
  @IsString()
  tel: string;
}