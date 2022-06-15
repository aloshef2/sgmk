import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async create(data: any): Promise<UsersEntity | undefined> {
    return this.userRepository.save(data);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(_condition: any): Promise<UsersEntity | undefined> {
    return this.userRepository.findOne(_condition);
  }

  async delete(data: any) {
    return this.userRepository.delete(data);
  }

  async update(data: any) {
    return this.userRepository.update(data.id, {
      name: data.name,
      email: data.email,
    });
  }
}
