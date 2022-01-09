import ArticleList from "components/Common/ArticleList";
import Card from "components/Common/Card";
import HotArticle from "components/Common/HotArticle";
import TagList from "components/Common/TagList";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex border-gray-200 dark:border-gray-700 m-5">
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
        <TagList />
      </div>
    </div>
  );
};

export default Home;
