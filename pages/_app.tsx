import React from 'react'
import App, { AppContext, AppInitialProps } from 'next/app'
import { IntlMessages, NextIntlProvider } from 'next-intl'
import { GlobalContext, IGlobalContext } from '@/context/global'
import { SettingProvider } from '@/providers/setting'
import { TagProvider } from '@/providers/tag'
import { CategoryProvider } from '@/providers/category'
import { PageProvider } from '@/providers/page'
import { AppLayout } from '@/Layout/AppLayout'

class MyApp extends App<IGlobalContext, unknown> {
  state = {
    locale: '',
    user: null,
  }

  static getInitialProps = async ({ Component, ctx }) => {
    const getPagePropsPromise = Component.getInitialProps
      ? Component.getInitialProps(ctx)
      : Promise.resolve({})
    const [pageProps, setting, tags, categories, pages] = await Promise.all([
      getPagePropsPromise,
      SettingProvider.getSetting(),
      TagProvider.getTags({ articleStatus: 'publish' }),
      CategoryProvider.getCategory({ articleStatus: 'publish' }),
      PageProvider.getAllPublisedPages(),
    ])

    const i18n = JSON.parse(setting.i18n)

    return {
      pageProps,
      setting,
      tags,
      categories,
      pages: pages[0] || [],
      i18n,
      locales: Object.keys(i18n),
    }
  }

  changeLocale = (key) => {
    window.localStorage.setItem('local', key)
    this.setState({ locale: key })
  }
  setUser = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user))
    this.setState({ user })
  }

  removeUser = () => {
    window.localStorage.setItem('user', '')
    this.setState({ user: null })
  }

  componentDidMount() {
    const userStr = window.localStorage.getItem('user')
    if (userStr) {
      this.setState({ user: JSON.parse(userStr) })
    }
  }

  render(): JSX.Element {
    const { Component, pageProps, i18n, locales, router, ...contextValue } = this.props
    const locale = this.state.locale || router.locale
    const message = i18n[locale] || {}
    return (
      <GlobalContext.Provider
        value={{
          ...contextValue,
          i18n,
          locale,
          locales,
          changeLocale: this.changeLocale,
          user: this.state.user,
          setUser: this.setUser,
          removeUser: this.removeUser,
        }}
      >
        {/* <NextIntlProvider messages={message as IntlMessages} locale={locale}> */}
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
        {/* </NextIntlProvider> */}
      </GlobalContext.Provider>
    )
  }
}

export default MyApp
