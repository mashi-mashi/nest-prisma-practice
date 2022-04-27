import { Injectable, Logger } from '@nestjs/common';
import { Article, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticleService {
  private readonly logger = new Logger(ArticleService.name);
  constructor(private prisma: PrismaService) {}

  async findById(
    input: Prisma.ArticleWhereUniqueInput,
  ): Promise<Article | null> {
    return this.prisma.article.findUnique({ where: input });
  }

  async getAll(input?: Prisma.ArticleFindManyArgs): Promise<Article[]> {
    return this.prisma.article.findMany(input);
  }
}
