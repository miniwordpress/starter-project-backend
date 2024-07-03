// src/user/user.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { UsersService } from '../service/user-service';
import { User } from '../entity/user-entity';
import { UserRequest } from '../model/dto/request/user-request';
import { UserResponse } from '../model/dto/response/user-response';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('createUser')
  async createUser(@Body() createUserDto: UserRequest): Promise<User> {
  const newUser = this.userService.createUser(createUserDto);
  return newUser;
}

  @Get('getAllUsers')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get('getUser/:id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return await this.userService.getUser(id);
  }

  @Patch('updateUser/:id')
  async updateUser(@Param('id') id: number, @Body() updateUserDto: UserRequest): Promise<User> { 
    return await this.userService.updateUser(id, updateUserDto);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }

  @Get('check')
  getCheckAPI(): string {
    return this.userService.getCheckAPI();
  }
}
// test