import React from "react";
import Head from "next/head";
import "styles/global.css";
import 'styles/markdown.css'
// import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/docco.css'
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import AppLayout from "@/components/Layout/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>LRBlog</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/blog.svg" />
      </Head>
      <ThemeProvider attribute="class">
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </React.Fragment>
  );
}

