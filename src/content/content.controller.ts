import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentService } from './content.service';
import { Content } from './entities/content.entity';
import { ContentDto } from './dto/content.dto';
const log = console.log

@Controller('api/content')
export class ContentController {
  constructor( private contentService: ContentService ) {}

  @Get()
  getAll(): Promise<Content[]> {
    return this.contentService.findAll()
  }
  
  @Post()
    createContent(@Body() content: ContentDto) {
      log(content)
      return this.contentService.create(content)
  }
}