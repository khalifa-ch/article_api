import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateArticleDto } from '../dto/update-article.dto';
import { Article, ArticleDocument } from '../schema/article.schema';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name)
    private readonly articleModel: Model<ArticleDocument>,
  ) {}

  /**
   * Find all articles
   *
   * @returns Promise<ArticleDocument[]>
   */
  async findAllArticle(): Promise<ArticleDocument[]> {
    // assign find All as a []
    return await this.articleModel.find();
  }

  /**
   * Create an article
   *
   * @param createArticleDto CreateArticleDto
   *
   * @returns Promise<ArticleDocument>
   */
  async createArticle(article: Article): Promise<ArticleDocument> {
    return this.articleModel.create(article);
  }

  /**
   *
   * @param id string
   *
   * @returns Promise<ArticleDocument>
   */
  findOneArticle(id: string) {
    return this.articleModel.findById(id);
  }

  /**
   * @param id
   *
   * @param updateArticleDto
   *
   * @returns Promise<ArticleDocument>
   */
  async updateArticle(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<ArticleDocument> {
    return this.articleModel.findByIdAndUpdate(id, updateArticleDto);
  }

  /**
   * @param id string
   *
   * @returns Promise<ArticleDocument>
   */
  removeArticle(id: string) {
    return this.articleModel.findByIdAndRemove(id);
  }
}
