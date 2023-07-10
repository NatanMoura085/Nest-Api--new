import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { createDTo } from './dtos/create-dto';

@Controller('app')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  GetAll() {
    return this.prisma.user.findMany();
  }

  @Post()
  async create(@Body() body: createDTo) {
    const { email, name } = body;
    await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        email,
      },
    });
  }
}
