import { WithRouterProps } from 'next/dist/client/with-router'
import { withRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Viewer } from '@bytemd/react'
import highlight from '@bytemd/plugin-highlight-ssr'
import frontmatter from '@bytemd/plugin-frontmatter'
import { Card, Skeleton } from '@arco-design/web-react'
import { getArticles, IArticle } from '@/api/v1/article'

const ArticleDetail = ({ router }: WithRouterProps) => {
  const plugins = [frontmatter(), highlight()]

  const [loading, setLoading] = useState<boolean>(false)
  const [detail, setDetail] = useState<IArticle>()

  // const fetchDetail = async () => {
  //     setLoading(true)
  //     const result = await getArticles(Number(router.query['id']))
  //     setDetail(result)
  //     setLoading(false)
  // }

  // useEffect(() => {
  //     // 当路由参数加载进来在执行请求函数
  //     router.query['id'] && fetchDetail()
  // }, [router.query])

  return (
    <div className="max-w-4xl py-5">
      <div className="p-5 bg-white markdownBody dark:bg-dark-600">
        <Skeleton loading={loading} text={{ width: '90%' }} animation>
          {detail?.content! && (
            <Viewer value={detail.content} plugins={plugins}></Viewer>
          )}
        </Skeleton>
      </div>
    </div>
  )
}

export default withRouter(ArticleDetail)
