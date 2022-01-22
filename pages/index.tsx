import React, { useCallback, useEffect, useState } from 'react'
import ArticleList from 'components/Common/ArticleList'
import InfiniteScroll from 'react-infinite-scroller'
import { DatePicker, Carousel, Spin, Button, Divider } from '@arco-design/web-react'
import HotArticle from 'components/Common/HotArticle'
import TagList from 'components/Common/TagList'
import { NextPage } from 'next'
import { Affix } from '@arco-design/web-react'
import { Article, getArticles, SortType } from '@/api/article'
import { Pagination } from '@/api/general'
import { useRouter } from "next/router";

interface IIndexPageProps {
  articles: Article[]
}

const defaultPagination: Pagination = {
  current_page: 1,
  per_page: 10,
  total: 0,
  total_page: 0,
}

const IndexPage: NextPage<IIndexPageProps> = ({
  articles: defaultArticles = [],
}) => {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>(defaultArticles)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [fetching, setFetching] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [sort, setSort] = useState<SortType>(null)

  console.log(router.query)

  useEffect(() => {
    const query = router.query as any
    fetchArticle()
  }, [router.query])

  useEffect(() => {
    if (page !== 1) {
      loadMore()
    }
  }, [page])

  useEffect(() => {
    sort && fetchArticle()
  }, [sort])
  // const { data: articles, loading: articleLoading } = useRequest(getArticles);
  // console.log(category, "CategoryStore")
  const fetchArticle = () => {
    setArticles([])
    setPage(1)
    setFetching(true)
    console.log(page, 'page')
    getArticles({ page, sort, category: router.query['category_id'] }).then((result) => {
      setArticles(result.data)
      setTotal(result.pagination.total)
      setFetching(false)
    })
  }

  const loadMore = () => {
    setLoading(true)
    getArticles({ page, sort, category: router.query['category_id'] }).then((result) => {
      setPage(result.pagination.current_page)
      setArticles((articles) => [...articles, ...result.data])
      setTotal(result.pagination.total)
      setLoading(false)
    })
  }

  return (
    <div className="flex max-w-screen-xl m-5 mx-auto duration-300 border-gray-200 dark:border-gray-700">
      <div className="w-full text-gray-500 rounded-lg sm:w-3/4 ">
        <div className="flex p-3 mb-2 duration-700 bg-white dark:bg-gray-800 bg-opacity-60 hover:bg-white dark:hover:bg-gray-600">
          <span
            className={`mr-5 cursor-pointer hover:text-primary ${sort === SortType.Asc ? 'text-primary font-bold' : ''
              }`}
            onClick={() => setSort(SortType.Asc)}
          >
            最早
          </span>
          <span
            className={`mr-5 cursor-pointer hover:text-primary ${sort === SortType.Desc ? 'text-primary font-bold' : ''
              }`}
            onClick={() => setSort(SortType.Desc)}
          >
            最新
          </span>
          <span
            className={`mr-5 cursor-pointer hover:text-primary ${sort === SortType.Hot ? 'text-primary font-bold' : ''
              }`}
            onClick={() => setSort(SortType.Hot)}
          >
            最热
          </span>
        </div>
        {/* 文章列表 */}
        <ArticleList {...{ articles: articles, fetching }} />
        {/* 加载更多 */}
        {articles.length && articles.length < total && !fetching ? (
          <div className="flex justify-center w-full">
            <Button onClick={() => setPage((page) => page + 1)} loading={loading}>
              加载更多
            </Button>
          </div>
        ) : (
          <Divider orientation="center">
            <span className="text-sm text-gray">到底啦</span>
          </Divider>
        )}
      </div>
      <div className="hidden w-1/4 ml-5 sm:block">
        <Affix offsetTop={60}>
          <HotArticle />
          {/* <Carousel
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
          </Carousel> */}
          <TagList />
        </Affix>
      </div>
    </div>
  )
}

export default IndexPage

// 服務端預獲取數據
IndexPage.getInitialProps = async () => {
  const { data } = await getArticles()
  return {
    articles: data,
  }
}
