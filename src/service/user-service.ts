import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user-entity';
import { UserRequest } from '../model/dto/request/user-request';
import { UserResponse } from '../model/dto/response/user-response';

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

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUser(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async updateUser(
    id: number,
    updateUserRequest: UserRequest,
  ): Promise<User | null> {
    const existingUser = await this.usersRepository.findOneBy({ id });
    existingUser.username = updateUserRequest.username;
    existingUser.firstName = updateUserRequest.firstName;
    existingUser.lastName = updateUserRequest.lastName;
    existingUser.email = updateUserRequest.email;
    existingUser.tel = updateUserRequest.tel;

    if (!existingUser) {
      throw new Error('No existingUser');
    }

    const updatedUser = await this.usersRepository.save(existingUser);
    return updatedUser;
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  getCheckAPI(): string {
    return 'IT WORK !';
  }
}
