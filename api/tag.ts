import { GeneralExtend, Pagination } from './general'
import http from './http'

/** 标签数据 */
export interface ITag {
  id?: number
  _id?: string
  name: string
  slug: string
  count?: number
  description: string
  update_at: string
  create_at: string
  extends: Array<GeneralExtend>
}

type TagResult = {
  data: ITag[]
  pagination: Pagination
}

export const TAG_API_PATH = '/tag'

export const getTags = (params?) => {
  return http
    .get<TagResult>(TAG_API_PATH, {
      params,
    })
    .then((response) => response.result)
}
