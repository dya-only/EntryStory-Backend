import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';
import { UserDto } from './dto/user.dto';
const log = console.log

@Controller('api/users')
export class UsersController {
  constructor( private usersService: UsersService ) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  getOne(@Param() id: string): Promise<User> {
    return this.usersService.findOne(id)
  }

  @Post()
  createUser(@Body() user: UserDto) {
    log(user)
    return this.usersService.create(user)
  }
}