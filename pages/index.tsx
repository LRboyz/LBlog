import { GlobalContext } from '@/context/global'
import { BaseLayout } from '@/Layout/BaseLayout'
import { ArticleProvider } from '@/providers/article'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import React, { useState, useCallback, useEffect, useContext } from 'react'

interface IHomeProps {
  articles: IArticle[]
  total: number
  recommendedArticles: IArticle[]
}

const pageSize = 12

export const CategoryMenu = ({ categories }) => {
  // const t = useTranslations()
  const router = useRouter()
  const { asPath } = router
  return <>Menu</>
}

const Home: NextPage<IHomeProps> = ({
  articles: defaultArticles = [],
  recommendedArticles = [],
  total = 0,
}) => {
  const { setting, tags, categories } = useContext(GlobalContext)
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState<IArticle[]>(defaultArticles)

  // useEffect(() => {
  //   setArticles(defaultArticles)
  // }, [defaultArticles])

  // const getArticles = useCallback((page) => {
  //   ArticleProvider.getArticles({
  //     page,
  //     pageSize,
  //     status: 'public',
  //   }).then((res) => {
  //     setPage(page)
  //     setArticles((articles) => [...articles, ...res[0]])
  //   })
  // }, [])

  return (
    <div>
      <BaseLayout
        leftNode={
          <>
            <div>左侧边栏</div>
          </>
        }
        rightNode={
          <>
            <div>右侧边栏</div>
          </>
        }
      />
    </div>
  )
}

export default Home
