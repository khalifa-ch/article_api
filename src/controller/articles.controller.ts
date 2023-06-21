import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ArticlesService } from '../service/articles.service';

import { UpdateArticleDto } from '../dto/update-article.dto';
import { Article } from 'src/schema/article.schema';
import { CustomValidationPipe } from 'src/validator/global-validator';

@Controller('supply/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post('')
  @UsePipes(
    new CustomValidationPipe({
      groups: ['create-supplier'],
    }),
  )
  createArticle(@Body() article: Article) {
    return this.articlesService.createArticle(article);
  }

  @Get('')
  findAllarticle() {
    return this.articlesService.findAllArticle();
  }

  @Get(':id')
  findOneArticle(@Param('id') id: string) {
    return this.articlesService.findOneArticle(id);
  }

  @Put(':id')
  @UsePipes(
    new CustomValidationPipe({
      groups: ['update-article'],
    }),
  )
  updateArticle(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.updateArticle(id, updateArticleDto);
  }

  @Delete(':id')
  removeArticle(@Param('id') id: string) {
    return this.articlesService.removeArticle(id);
  }
}
