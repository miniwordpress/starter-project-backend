import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './controller/user-controller';
import { UsersService } from './service/user-service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UsersService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "IT WORK !"', () => {
      expect(userController.getCheckAPI()).toBe('IT WORK !');;
    });
  });
});
