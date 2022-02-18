import { IArticle } from '@/api/v1/article'

import { IconFont } from '@/config'

import {
  Tag,
  Icon,
  Image,
  Spin,
  Button,
  Space,
  Skeleton,
  Empty,
  Divider,
} from '@arco-design/web-react'
import { IconEye, IconHeart, IconMessage, IconStar } from '@arco-design/web-react/icon'
import Link from 'next/link'

interface ArticleListProps {
  articles: IArticle[]
  fetching: boolean
}

export default function ArticleList({ articles, fetching }: ArticleListProps) {
  return (
    <div className="flex flex-col w-full">
      {fetching ? (
        <Skeleton text={{ rows: 3, width: ['100%'] }} image animation></Skeleton>
      ) : articles.length > 0 ? (
        articles.map((article, index) => (
          <Link href={`/article/${article._id}`} key={index}>
            <div
              key={article._id}
              className="relative mb-4 duration-700 bg-white bg-opacity-50 bg-center rounded-md shadow cursor-pointer dark: bg-opacity-5 dark:bg-dark-100 h-36 hover:bg-white dark:hover:bg-gray-600 overflow-clip"
            >
              <div className="absolute inset-0 flex p-2">
                <a className="flex items-center " style={{ width: 200 }}>
                  <img
                    style={{ minWidth: 195, maxHeight: 120 }}
                    className="flex items-center object-contain rounded-lg"
                    src={`${article.thumb}`}
                  />
                </a>

                <div className="flex-col flex-auto flex-grow px-3">
                  <div className="flex h-30">
                    <h1 className="flex-auto font-sans text-sm font-semibold truncate">
                      {article.title}
                    </h1>
                    {/* <div className="flex hidden sm:block">
                      {article.tag
                        .map((tag, index) => (
                          <Tag
                            key={tag._id}
                            color="arcoblue"
                            className="mr-4 font-sans"
                            icon={
                              <IconFont
                                // type={getExtendValue(tag.extends, 'icon')}
                                style={{ fontSize: 14 }}
                              />
                            }
                          >
                            {tag.tag_name}
                          </Tag>
                        ))
                        .slice(0, 2)}
                    </div> */}
                  </div>

                  <p
                    className="w-full mt-3 font-sans text-sm truncate text-gray dark:text-dark"
                    style={{ minHeight: 70 }}
                  >
                    {article.description}
                  </p>

                  <div className="flex items-center">
                    <div className="hidden sm:block">
                      <Space>
                        <Button icon={<IconHeart />} size="mini">
                          10
                        </Button>
                        <Button icon={<IconMessage />} size="mini">
                          10
                        </Button>
                        <Button icon={<IconStar />} size="mini">
                          5
                        </Button>
                        <Button icon={<IconEye />} size="mini">
                          66
                        </Button>
                      </Space>
                    </div>
                    <div style={{ flex: 1 }} className="hidden sm:block"></div>
                    <span className="font-sans text-xs text-gray dark:text-dark">
                      一周前
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="inset-0 w-full h-full duration-700 bg-center bg-no-repeat dark:opacity-5 absoulte opacity-5 hover:opacity-0 dark:hover:bg-gray-600"
                style={{
                  backgroundImage: `url(${article.thumb})`,
                  backgroundSize: '120%',
                }}
              />
            </div>
          </Link>
        ))
      ) : (
        <div className="flex justify-center w-full p-5">
          <Empty description="暂无文章" />
        </div>
      )}
    </div>
  )
}
