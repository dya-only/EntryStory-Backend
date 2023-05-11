import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { genSalt, hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id })
  }

  async create(user: UserDto) {
    const salt = await genSalt()
    const hashed = await hash(user.pw, salt)

    const _user = {
      id: user.id,
      pw: hashed,
      itype: user.itype
    }

    await this.usersRepository.save(_user)
  }
}