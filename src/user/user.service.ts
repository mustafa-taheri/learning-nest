import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(userData);
    await this.usersRepository.save(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User not found with id: ' + id);
    }
    return user;
  }

  async update(id: number, userData: Partial<User>): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User not found with id: ' + id);
    }
    const updatedUser = this.usersRepository.merge(user, userData);
    return this.usersRepository.save(updatedUser);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
