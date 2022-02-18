import http from '../http'
import { ICategory } from './category'
import { ITag } from './tag'

export interface IArticle {
  _id: string
  content: string
  origin: string
  state: string
  thumb: string
  title: string
  article_view: number
  comment_count: number
  article_zan: number
  _createTime: number
  _updateTime: number
  description: string
  category: ICategory[]
  tag: ITag[]
  article_author?: {
    avatar: string
    name: string
    email: string
  }
}

const ARTICLE_PATH = '/article'

export const getArticles = async () => {
  return await http.get<IArticle[]>(ARTICLE_PATH)
}
