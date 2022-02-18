import http from '../http'

export interface ICategory {
  _id: string
  category_name: string
  category_icon: string
  category_desc: string
  _createTime: number
  _updateTime: number
}

const CATEGORY_PATH = '/category'

export const getCategorys = async () => {
  return await http.get<ICategory[]>(CATEGORY_PATH)
}
