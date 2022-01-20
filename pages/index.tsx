import React, { useState } from "react";
import ArticleList from "components/Common/ArticleList";
import { DatePicker, Carousel } from "@arco-design/web-react";
import HotArticle from "components/Common/HotArticle";
import TagList from "components/Common/TagList";
import { NextPage } from "next";
import { Affix } from '@arco-design/web-react';
import { useRequest } from 'ahooks';
import { Article, getArticles } from "@/api/article";


const IndexPage: NextPage = ({ children }) => {

  const { data: articles, loading: articleLoading } = useRequest(getArticles);

  const imageSrc = [
    "https://pic1.zhimg.com/v2-188c7b0e0c0eaf82677b326c0de4130d_bh.jpg?source=d6434cab",
    "https://pic.leetcode-cn.com/1641776403-JucygT-480x240 声网.png"
  ]

  return (
    <div className="flex max-w-screen-xl m-5 mx-auto duration-300 border-gray-200 dark:border-gray-700">
      <div className="w-full text-gray-500 bg-white rounded-lg sm:w-3/4 dark:bg-gray-800">
        <div className="flex p-3">
          <span className="mr-5 cursor-pointer hover:text-blue-600">综合</span>
          <span className="mr-5 cursor-pointer hover:text-blue-600">最新</span>
          <span className="mr-5 cursor-pointer hover:text-blue-600">最热</span>
        </div>
        <ArticleList {...{ articles: articles?.data, loading: articleLoading, pagination: articles?.pagination }} />
      </div>
      <div className="hidden w-1/4 ml-5 sm:block">
        <Affix offsetTop={60}>
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
                <img src={src} className="w-full" />
              </div>
            ))}
          </Carousel>
          <TagList />
        </Affix>
      </div>
    </div>
  );
};

export default IndexPage;

