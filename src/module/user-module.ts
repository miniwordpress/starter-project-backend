import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user-entity';
import { UsersService } from '../service/user-service';
import { UserController } from '../controller/user-controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'password1', // Change to your database password
    database: 'starter_db', // Change to your database name
    entities: [User],
    synchronize: true, // Set to false in production
  }), TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}