import { List } from "@arco-design/web-react";

export default function HotArticle() {
  const ColorBox = ["#F87171", "#FFA116", "#FBBF24"];
  return (
    <div>
      <List
        className="bg-white dark:bg-gray-800 rounded-lg"
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
          <List.Item key={index} className="dark:text-dark text-gray-600 cursor-pointer hover:shadow duration-200 hover:font-semibold" style={{ border: "none"}}>
            <span className="mr-2 font-bold p-2 text-xs" style={{ color: ColorBox[index] }}>
              {index + 1}
            </span>
            <span className="">{item}</span>
          </List.Item>
        )}
      />
      ,
    </div>
  );
}
