import React, { useEffect, useState } from 'react'
import ArticleList from 'components/Common/ArticleList'
import InfiniteScroll from 'react-infinite-scroller'

import HotArticle from 'components/Common/HotArticle'
import TagList from 'components/Common/TagList'
import { NextPage } from 'next'

import { IArticle, getArticles, SortType } from '@/api/article'
import { Pagination } from '@/api/general'
import { useRouter } from 'next/router'
import { getTags, ITag } from '@/api/tag'
import { advertResource } from '@/constants'
import { Affix, Button, Carousel, Divider } from '@arco-design/web-react'

interface IIndexPageProps {
  articles: IArticle[]
  hotArticles: IArticle[]
  tags: ITag[]
}

const defaultPagination: Pagination = {
  current_page: 1,
  per_page: 10,
  total: 0,
  total_page: 0,
}

const IndexPage: NextPage<IIndexPageProps> = ({
  articles: defaultArticles = [],
  tags = [],
  hotArticles = []
}) => {
  const router = useRouter()
  const [articles, setArticles] = useState<IArticle[]>(defaultArticles)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [fetching, setFetching] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [sort, setSort] = useState<SortType>(null)

  console.log("热门文章列表", hotArticles)
  useEffect(() => {
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

  const fetchArticle = () => {
    setArticles([])
    setPage(1)
    setFetching(true)
    getArticles({ page, sort, category: router.query['category_id'] }).then(
      (result) => {
        setArticles(result.data)
        setTotal(result.pagination.total)
        setFetching(false)
      }
    )
  }

  const loadMore = () => {
    setLoading(true)
    getArticles({ page, sort, category: router.query['category_id'] }).then(
      (result) => {
        setPage(result.pagination.current_page)
        setArticles((articles) => [...articles, ...result.data])
        setTotal(result.pagination.total)
        setLoading(false)
      }
    )
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
        <div className="flex justify-center w-full">
          {articles.length && articles.length < total && !fetching ? (
            <Button onClick={() => setPage((page) => page + 1)} loading={loading}>
              加载更多
            </Button>
          ) : (
            <Divider orientation="center">
              <span className="text-sm text-gray">到底啦</span>
            </Divider>
          )}
        </div>
      </div>
      <div className="hidden w-1/4 ml-5 sm:block">
        <Affix offsetTop={60}>
          <HotArticle hotList={hotArticles} />
          <Carousel
            className="mt-5 dark:bg-gray-800"
            style={{
              height: 120,
              marginBottom: 20
            }}
            autoPlay
            showArrow="never"
            direction="vertical"
            indicatorPosition="right"
          >
            {advertResource.map((src, index) => (
              <div key={index}>
                <img src={src} className="w-full" />
              </div>
            ))}
          </Carousel>
          <TagList tags={tags} />
        </Affix>
      </div>
    </div>
  )
}

export default IndexPage

// 服務端預獲取數據
IndexPage.getInitialProps = async () => {
  const [articles, tags, hotArticles] = await Promise.all([getArticles(), getTags(), getArticles({ cache: 1, sort: SortType.Hot })])

  return {
    articles: articles.data,
    tags: tags.data,
    hotArticles: hotArticles.data
  }
}
