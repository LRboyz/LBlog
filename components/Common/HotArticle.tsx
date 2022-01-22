import { List } from "@arco-design/web-react";

export default function HotArticle() {
  const ColorBox = ["#F87171", "#FFA116", "#FBBF24"];
  return (
    <div>
      <List
        className="bg-white rounded-lg dark:bg-gray-800"
        size="small"
        bordered={false}
        header={<h4 className="text-sm dark:text-dark">推荐文章  🔥</h4>}
        dataSource={[
          "Python 全栈开发",
          "字节跳动面经总结",
          "Vue.js权威指南",
          "React Hooks全解",
          "AntDesign",
        ]}
        render={(item, index) => (
          <List.Item key={index} className="text-gray-600 duration-700 cursor-pointer hover:bg-gray-100 dark:text-dark" style={{ border: "none" }}>
            <span className="p-2 mr-2 text-xs font-bold" style={{ color: ColorBox[index] }}>
              {index + 1}
            </span>
            <span className="subpixel-antialiased overflow-ellipsis hover:text-primary">{item}</span>
          </List.Item>
        )}
      />
    </div>
  );
}
