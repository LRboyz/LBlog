import { IArticle } from "@/api/article";
import { List } from "@arco-design/web-react";
import Link from "next/link";

interface HotArticleListProps {
  hotList: IArticle[]
}

export default function HotArticle({ hotList }: HotArticleListProps) {

  const ColorBox = ["#F87171", "#FFA116", "#FBBF24"];

  return (
    <div>
      <List
        className="bg-white rounded-lg dark:bg-gray-800"
        size="small"
        bordered={false}
        header={<h4 className="text-sm dark:text-dark">推荐文章  🔥</h4>}
        dataSource={hotList.slice(0, 9)}
        render={(item, index) => (
          <Link href={`/article/${item.id}`} key={item._id}>
            <List.Item key={index} className="p-0 text-gray-600 duration-700 cursor-pointer hover:bg-gray-100 dark:text-dark" style={{ border: "none" }}>
              <span className="p-2 mr-2 font-sans text-xs font-semibold text-gray" style={{ color: ColorBox[index] }}>
                {index + 1}
              </span>
              <span className="font-sans text-sm subpixel-antialiased text-justify break-all text-gray overflow-ellipsis hover:text-primary">{item.title}</span>
            </List.Item>
          </Link>

        )}
      />
    </div>
  );
}
