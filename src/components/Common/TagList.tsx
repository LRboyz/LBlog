import { ITag } from '@/api/v1/tag'
import { IconFont } from '@/config'
import { Space, Tag } from '@arco-design/web-react'
import {
  IconFacebook,
  IconGithub,
  IconGitlab,
  IconTwitter,
} from '@arco-design/web-react/icon'

interface TagListProps {
  tags: ITag[]
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap p-3 mt-5 bg-white rounded-lg dark:bg-gray-800 fduration-300 lex-start duration-700">
      {tags.map((tag) => (
        <Space key={tag._id}>
          <Tag
            className="mb-2 mr-2"
            color="gray"
            icon={<IconFont type={tag.tag_icon} style={{ fontSize: 14 }} />}
          >
            {`${tag.tag_name}(0)`}
          </Tag>
        </Space>
      ))}
    </div>
  )
}
