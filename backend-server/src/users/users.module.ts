import { UsersEntity } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    JwtModule.register({ secret: 'root', signOptions: { expiresIn: '1d' } }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
