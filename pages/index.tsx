import React, { useState } from "react";
import ArticleList from "components/Common/ArticleList";
import { DatePicker, Carousel } from "@arco-design/web-react";
import HotArticle from "components/Common/HotArticle";
import TagList from "components/Common/TagList";

const Home = () => {
  const [value, setValue] = useState();
  const [pickerValue, setPickerValue] = useState();
  const imageSrc= [
      "https://pic1.zhimg.com/v2-188c7b0e0c0eaf82677b326c0de4130d_bh.jpg?source=d6434cab",
      "https://pic.leetcode-cn.com/1641776403-JucygT-480x240 声网.png"
  ]

  return (
    <div className="flex border-gray-200 dark:border-gray-700 m-5 duration-300">
      <div className="w-3/4 text-gray-500 p-3 bg-white dark:bg-gray-800 mr-5 rounded-lg shadow">
        <div className="flex">
          <span className="mr-5 hover:text-blue-600 cursor-pointer">综合</span>
          <span className="mr-5 hover:text-blue-600 cursor-pointer">最新</span>
          <span className="mr-5 hover:text-blue-600 cursor-pointer">最热</span>
        </div>
        <ArticleList />
      </div>
      <div className="w-1/4">
        <HotArticle />
        <Carousel
          className="dark:bg-gray-800"
          style={{
            height: 120,
            marginBottom: 20
          }}
          autoPlay
          showArrow="never"
          direction="vertical"
          indicatorPosition="right"
        >
          {imageSrc.map((src, index) => (
            <div key={index}>
              <img src={src} className="w-full"/>
            </div>
          ))}
        </Carousel>
        <DatePicker
          triggerElement={null}
          value={value}
          onChange={(v: any) => setValue(v)}
          pickerValue={pickerValue}
          onPickerValueChange={(v: any) => setPickerValue(v)}
        />
        <TagList />
      </div>
    </div>
  );
};

export default Home;
