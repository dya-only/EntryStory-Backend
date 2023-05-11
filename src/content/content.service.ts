import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './entities/content.entity';
import { Repository } from 'typeorm';
import { ContentDto } from './dto/content.dto';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}

  findAll(): Promise<Content[]> {
    return this.contentRepository.find()
  }

  async create(content: ContentDto) {
    await this.contentRepository.save(content)
  }
}