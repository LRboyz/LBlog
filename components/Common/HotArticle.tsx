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
        dataSource={hotList}
        render={(item, index) => (
          <Link href={`/article/${item.id}`} key={item._id}>
             <List.Item key={index} className="text-gray-600 duration-700 cursor-pointer hover:bg-gray-100 dark:text-dark" style={{ border: "none" }}>
            <span className="p-2 mr-2 text-xs font-bold" style={{ color: ColorBox[index] }}>
              {index + 1}
            </span>
            <span className="subpixel-antialiased overflow-ellipsis hover:text-primary">{item.title}</span>
          </List.Item>
          </Link>
       
        )}
      />
    </div>
  );
}
