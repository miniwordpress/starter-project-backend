import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user-entity';
import { UserRequest } from '../model/dto/request/user_request';
import { UserResponse } from '../model/dto/response/user_response';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserRequest: UserRequest): Promise<User> {
    const newUser = this.usersRepository.create(createUserRequest);
    return await this.usersRepository.save(newUser);
  }

  getAllUsers(): Promise<UserResponse[]> {
    return this.usersRepository.find();
  }

  getUser(id: number): Promise<UserResponse | null> {
    return this.usersRepository.findOneBy({ id });
  }

  updateUser(updateUserRequest: UserRequest): Promise<UserResponse> {
    return this.usersRepository.save(updateUserRequest);
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
