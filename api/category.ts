import { GeneralExtend } from "./general"


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
  