import { Category } from "./category";
import {
  GeneralExtend,
  GeneralGetPageParams,
  Pagination,
  PublishState,
} from "./general";
import http from "./http";
import { Tag } from "./tag";

/** 文章来源 */
export enum ArticleOrigin {
  Original = 0, // 原创
  Reprint = 1, // 转载
  Hybrid = 2, // 混合
}
/** 文章公开状态 */
export enum ArticlePublic {
  Password = 0, // 需要密码
  Public = 1, // 公开状态
  Secret = -1, // 私密
}

/** 数据排序状态 */
export enum SortType {
  Asc = 1, // 升序
  Desc = -1, // 降序
  Hot = 2, // 最热
}

/** 文章 */
export interface Article {
  id?: number;
  _id?: string | number;
  slug: string | null;
  title: string;
  content?: string;
  description: string;
  keywords: string[];
  thumb?: string;
  tag: Array<Tag>;
  category: Array<Category>;
  origin: ArticleOrigin;
  public: ArticlePublic;
  state: PublishState;
  disabled_comment?: boolean;
  password?: string;
  meta?: {
    likes: number;
    views: number;
    comments: number;
  };
  update_at?: string;
  create_at?: string;
  extends: Array<GeneralExtend>;
}

/** 获取文章参数 */
export interface GetArticleParams extends GeneralGetPageParams {
  keyword?: string;
  tag?: string;
  category?: string;
  sort?: SortType;
  state?: PublishState;
  public?: ArticlePublic;
  origin?: ArticleOrigin;
}

export const ARTICLE_API_PATH = "/article";

export function getArticles(params?: GetArticleParams) {
  return http
    .get<{
      data: Article[];
      pagination: Pagination;
    }>(ARTICLE_API_PATH, {
      params,
    })
    .then((response) => response.result);
}
