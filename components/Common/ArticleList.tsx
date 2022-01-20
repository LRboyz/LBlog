import { Article } from "@/api/article";
import { Pagination } from "@/api/general";
import { COLORS } from "@/constants";
import { List, Tag, Icon } from "@arco-design/web-react";
import {
  IconGithub,
  IconGitlab,
  IconHeart,
  IconMessage,
  IconStar,
  IconTwitter,
} from "@arco-design/web-react/icon";
import Link from "next/link";

export type ArticleData = {};
const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/29c1f9d7d17c503c5d7bf4e538cb7c4f.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/04d7bc31dd67dcdf380bc3f6aa07599f.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1f61854a849a076318ed527c8fca1bbf.png~tplv-uwbnlip3yd-webp.webp",
];
const names = ["前端工程师的领悟", "后端工程师的挣扎", "运维工程师的呐喊"];

const avatarSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp",
];
const dataSource = new Array(15).fill(null).map((_, index) => {
  return {
    index: index,
    avatar: avatarSrc[index % avatarSrc.length],
    title: names[index % names.length],
    description: "活在当下",
    imageSrc: imageSrc[index % imageSrc.length],
  };
});

interface ArticleListProps {
  articles: Article[]
  loading: boolean
  pagination: Pagination
}

export default function ArticleList({ articles, loading, pagination }: ArticleListProps) {

  const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/font_2700222_mq6ajweycfm.js' });

  return (
    <List
      className="px-3 bg-opacity-50"
      bordered={false}
      dataSource={articles}
      render={(item, index) => (
        <Link href="article/1" key={index}>
          <List.Item
            className="mb-2 duration-300 cursor-pointer hover:shadow hover:bg-gray-50"
            key={index}
            style={{
              padding: "10px 5px",
              borderBottom: "1px solid var(--color-fill-3)",
            }}
            actionLayout="vertical"
            actions={[
              <span className="hidden text-light dark:text-dark sm:block" key={1}>
                <IconHeart className="mr-1" />
                {83}
              </span>,
              <span key={2} className="hidden text-light dark:text-dark sm:block">
                <IconStar className="mr-1" />
                {index}
              </span>,
              <span key={3} className="hidden text-light dark:text-dark sm:block">
                <IconMessage className="mr-1" />
                23
              </span>,
              <div>
                {
                  item.tag.map(tag => (
                    <Tag icon={<IconFont type={tag.extends[1].value} style={{ fontSize: 14 }} />}> {tag.name} </Tag>
                  ))
                }
              </div>
            ]}
            extra={
              <div className="order-1 ml-2">
                <img
                  alt="arcodesign"
                  className="rounded-lg"
                  src={item.thumb}
                  style={{ width: 183, height: 110 }}
                />
              </div>
            }
          >
            <List.Item.Meta
              title={
                <div>
                  <span className="mr-5 font-bold text-light dark:text-dark hover:text-primary">
                    {item.title}
                  </span>
                  <Tag color={COLORS[Math.floor(Math.random() * COLORS.length)]}>{item.category[0].name}</Tag>
                </div>
              }
              description={
                <div className="pt-2 text-gray" style={{ minHeight: 60 }}>
                  {item.description}
                </div>
              }
            />
          </List.Item>
        </Link>
      )}
    />
  );
}
