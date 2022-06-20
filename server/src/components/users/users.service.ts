import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  findByClientId(client_id: string): Promise<User> {
    return this.usersRepository.findOne({ where: { client_id } });
  }

  async createUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async editUser(id: number, user: User): Promise<User> {
    const editUser = await this.usersRepository.findOne({ where: { id: id } });
    if (!editUser) {
      throw new NotFoundException('User is not found');
    }
    editUser.firstName = user.firstName;
    editUser.lastName = user.lastName;
    editUser.client_id = user.client_id;
    editUser.phone_number = user.phone_number;
    editUser.user_type = user.user_type;
    await editUser.save();
    return editUser;
  }
}
