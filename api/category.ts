import { GeneralExtend, Pagination } from './general'
import http from './http'

/** 分类 */
export interface Category {
  id?: number
  _id?: string
  pid?: string
  name: string
  slug: string
  count?: number
  description: string
  update_at: string
  create_at: string
  children?: Array<Category>
  extends: Array<GeneralExtend>
}

type CategoryResult = {
  data: Category[]
  pagination: Pagination
}

export const CATEGORY_API_PATH = '/category'

export const getCategorys = (params?) => {
  return http
    .get<CategoryResult>(CATEGORY_API_PATH, {
      params,
    })
    .then((response) => response.result)
}
