import { List, Tag } from "@arco-design/web-react";
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

export default function ArticleList(data: ArticleData) {
  return (
    <List
      className="bg-opacity-50 "
      bordered={false}
      dataSource={dataSource}
      render={(item, index) => (
        <Link href="article/1" key={index}>
          <List.Item
            className="hover:shadow cursor-pointer duration-300 mb-2"
            key={index}
            style={{
              padding: "10px 5px",
              borderBottom: "1px solid var(--color-fill-3)",
            }}
            actionLayout="vertical"
            actions={[
              <span className="text-light dark:text-dark" key={1}>
                <IconHeart className="mr-1" />
                {83}
              </span>,
              <span key={2} className="text-light dark:text-dark">
                <IconStar className="mr-1" />
                {item.index}
              </span>,
              <span key={3} className="text-light dark:text-dark">
                <IconMessage className="mr-1" />
                23
              </span>,
              <Tag className="mr-3" color="gray" icon={<IconGithub />}>
                Github
              </Tag>,
              <Tag className="mr-3" color="orangered" icon={<IconGitlab />}>
                Gitlab
              </Tag>,
              <Tag color="blue" icon={<IconTwitter />}>
                Twitter
              </Tag>,
            ]}
            extra={
              <div className="ml-2 order-1">
                <img
                  alt="arcodesign"
                  className="rounded-lg"
                  src={item.imageSrc}
                  style={{ width: 183, height: 110 }}
                />
              </div>
            }
          >
            <List.Item.Meta
              title={
                <div>
                  <span className="mr-5 text-light dark:text-dark">
                    {item.title}
                  </span>
                  <Tag>前端</Tag>
                </div>
              }
              description={
                <div className="pt-2" style={{ minHeight: 60 }}>
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
