import { ITag } from '@/api/tag'
import { IconFont } from '@/config'
import { getExtendValue } from '@/transforms/state'
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
    <div className="flex flex-wrap p-3 mt-5 bg-white rounded-lg dark:bg-gray-800 fduration-300 lex-start">
      {tags.map((tag) => (
        <Space key={tag._id}>
          <Tag className="mb-2 mr-2" color="gray" icon={<IconFont type={getExtendValue(tag.extends, 'icon')} style={{ fontSize: 14 }} />}>
            {`${tag.name}(${tag.count})`}
          </Tag>
        </Space>
      ))}
    </div>
  )
}
