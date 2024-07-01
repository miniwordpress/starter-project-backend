// src/user/user.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { UsersService } from '../service/user-service';
import { User } from '../entity/user-entity';
import { UserRequest } from '../model/dto/request/create_user_request';
import { UserResponse } from '../model/dto/response/user_response';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('createUser')
  async createUser(@Body() createUserDto: UserRequest): Promise<User> {
  const newUser = this.userService.createUser(createUserDto);
  return newUser;
}

  @Get('/')
  async getAllUsers(): Promise<UserResponse[]> {
    return await this.userService.getAllUsers();
  }

  @Get('getUser/:id')
  async findOne(@Param('id') id: number): Promise<UserResponse | null> {
    return await this.userService.getUser(id);
  }

  @Patch('updateUser')
  async updateUser(@Body() updateUserDto: UserRequest): Promise<UserResponse> { 
    return await this.userService.updateUser(updateUserDto);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
