import { Category } from './category'
import {
  GeneralExtend,
  GeneralGetPageParams,
  Pagination,
  PublishState,
} from './general'
import http from './http'
import { ITag } from './tag'

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
export interface IArticle {
  id?: number
  _id?: string | number
  slug: string | null
  title: string
  content?: string
  description: string
  keywords: string[]
  thumb?: string
  tag: Array<ITag>
  category: Array<Category>
  origin: ArticleOrigin
  public: ArticlePublic
  state: PublishState
  disabled_comment?: boolean
  password?: string
  meta?: {
    likes: number
    views: number
    comments: number
  }
  update_at?: string
  create_at?: string
  extends: Array<GeneralExtend>
}

type ArticleResult = {
  data: IArticle[]
  pagination: Pagination
}

export const ARTICLE_API_PATH = '/article'

export const getArticles = (params?) => {
  // console.log(params, '请求参数')
  return http
    .get<ArticleResult>(`/article`, {
      params,
    })
    .then((response) => response.result)
}
// export function getArticles(params = {}) {
//   console.log(params, '请求参数')
//   return http
//     .get<{
//       data: Article[]
//       pagination: Pagination
//     }>(ARTICLE_API_PATH, {
//       params,
//     })
//     .then((response) => response.result)
// }
