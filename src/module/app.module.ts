import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user-entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'admin',
            password: 'password1', // Change to your database password
            database: 'starter_db', // Change to your database name
            entities: [User],
            synchronize: true, // Set to false in production
          }),
        ],
})
      
export class AppModule {}
      