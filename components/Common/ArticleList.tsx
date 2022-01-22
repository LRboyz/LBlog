import { Article } from "@/api/article";
import { Pagination } from "@/api/general";
import { Tag, Icon, Image, Spin, Button, Space, Skeleton } from "@arco-design/web-react";
import {
  IconEye,
  IconHeart,
  IconMessage,
  IconStar,
} from "@arco-design/web-react/icon";
import Link from "next/link";

interface ArticleListProps {
  articles: Article[]
  fetching: boolean
}

export default function ArticleList({ articles, fetching }: ArticleListProps) {

  const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/font_2700222_mq6ajweycfm.js' });
  console.log(fetching)
  return (
    <div className="flex flex-col w-full">
      {
        !fetching ? (
          articles.map((article, index) => (
            <Link href={`/article/${article.id}`} key={index}>
              <div
                key={article._id}
                className="relative mb-4 duration-300 bg-white bg-opacity-50 dark: bg-opacity-5 bg-center rounded-md shadow cursor-pointer dark:bg-dark-100 h-36 hover:bg-white dark:hover:bg-gray-600 overflow-clip" >

                <div className="absolute inset-0 flex p-2">
                  <a className="flex items-center " style={{ width: 200 }}>
                    <Image
                      style={{ minWidth: 195, minHeight: 120 }}
                      className="flex items-center object-cover rounded-lg"
                      src={`${article.thumb}`}
                    />
                  </a>

                  <div className="flex-col flex-auto flex-grow px-3">
                    <div className="flex h-30">
                      <h1 className="flex-auto text-sm font-semibold truncate">
                        {article.title}
                      </h1>
                      <div className="flex hidden sm:block">
                        {
                          article.tag.map((tag, index) => (
                            <Tag key={tag._id}
                              color="arcoblue"
                              className="mr-4"
                              icon={<IconFont type={tag.extends[1].value} style={{ fontSize: 14 }} />}>
                              {tag.name}
                            </Tag>
                          )).slice(0, 2)
                        }
                      </div>
                    </div>

                    <p className="w-full mt-3 text-sm break-words truncate text-gray dark:text-dark" style={{ minHeight: 70 }} >
                      {article.description}
                    </p>

                    <div className="flex items-center">
                      <div className="hidden sm:block">
                        <Space>
                          <Button icon={<IconHeart />} size="mini" >10</Button>
                          <Button icon={<IconMessage />} size="mini" >10</Button>
                          <Button icon={<IconStar />} size="mini" >5</Button>
                          <Button icon={<IconEye />} size="mini" >66</Button>
                        </Space>
                      </div>
                      <div style={{ flex: 1 }} className="hidden sm:block"></div>
                      <span className="text-xs text-gray dark:text-dark">一周前</span>
                    </div>
                  </div>
                </div>
                <div className="dark:opacity-5 inset-0 w-full h-full duration-700 bg-center bg-no-repeat absoulte opacity-5 hover:opacity-0 dark:hover:bg-gray-600" style={{ backgroundImage: `url(${article.thumb})`, backgroundSize: '120%' }} />
              </div>
            </Link>
          ))
        ) : (

          <Skeleton text={{ rows: 3, width: ['100%'] }} image animation></Skeleton>

        )
      }
    </div>
  );
}
