import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  Res,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);

    const user = this.usersService.create({
      name,
      email,
      password: hash,
    });

    delete (await user).password;

    return user;
  }
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) _responce: Response,
  ) {
    const user = await this.usersService.findOne({ email });

    if (!user) {
      throw new BadRequestException('Пользователь не найден');
    }

    const passwordDec = await bcrypt.compare(password, user.password);
    if (!passwordDec) {
      throw new BadRequestException('Неверно введен пароль');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    _responce.cookie('jwt', jwt, { httpOnly: true });
    return {
      saccess_jwt: 'saccess',
    };
  }

  @Get('list')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('user')
  async findOne(@Req() _request: Request) {
    try {
      const cookie = _request.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.usersService.findOne({ id: data['id'] });

      const { password, ...result } = user;

      return result;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  @Post('delete')
  async delete(@Body('id') id: number) {
    try {
      const user = await this.usersService.delete({ id: id });
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  @Post('update')
  async update(
    @Body('id') id: number,
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    try {
      const user = await this.usersService.update({
        id: id,
        name: name,
        email: email,
      });
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
