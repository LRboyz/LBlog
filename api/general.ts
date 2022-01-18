export enum PublishState {
  Draft = 0, // 草稿
  Published = 1, // 已发布
  Recycle = -1, // 回收站
}
/** 通用的数据扩展 */
export interface GeneralExtend {
  name: string;
  value: string;
}
/** 通用请求参数 */
export interface GeneralGetParams {
    [key: string]: number | string | void
  }
  
  /** 通用翻页请求参数 */
  export interface GeneralGetPageParams extends GeneralGetParams {
    page?: number
    per_page?: number
  }
  
  /** 翻页参数 */
  export interface Pagination {
    current_page: number
    total_page: number
    per_page: number
    total: number
  }
  
  /** 数据体结构 */
  export interface ResponseData<T> {
    data: T
  }
  
  /** 数据体结构 */
  export interface ResponsePaginationData<T> {
    data: T[]
    pagination?: Pagination
  }
  