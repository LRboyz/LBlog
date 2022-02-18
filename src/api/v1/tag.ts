import http from '../http'

export interface ITag {
  _id: string
  tag_name: string
  tag_icon: string
  tag_color: string
  tag_desc: string
  _createTime: number
  _updateTime: number
}

const TAG_PATH = '/tag'

export const getTags = async () => {
  return await http.get<ITag[]>(TAG_PATH)
}
