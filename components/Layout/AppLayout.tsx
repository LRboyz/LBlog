import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LightLogo from '/public/logo/logo_light.png'
import DarkLogo from '/public/logo/logo_dark.png'
import cn from "classnames";
import { useTheme } from "next-themes";
import { Category, getCategorys } from "@/api/category";
import { Space } from "@arco-design/web-react";


const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.query['name'] === text;
  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-bold text-primary dark:text-gray-200 bg-blue-100 dark:bg-blue-600"
            : "font-normal dark:text-gray-400",
          "mr-2 p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-blue-100 hover:text-primary dark:hover:bg-blue-600 transition-all dark:text-dark"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};
const AppLayout: React.FC = ({ children }) => {

  const { resolvedTheme, setTheme } = useTheme();
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategory = async () => {
    const { data } = await getCategorys()
    setCategories(data)
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  // console.log(categories, "分類")

  return (
    <div className="bg-gray-50 dark:bg-gray-800 ">
      <header className="flex flex-col justify-center border-b divide-gray-100">
        <nav className="relative flex items-center w-full max-w-5xl pt-3 mx-auto text-gray-900 border-gray-200 flex-start dark:border-gray-900 sm:pb-3 bg-gray-50 dark:bg-gray-800 bg-opacity-60 dark:text-gray-100">
          <a href="/" className="text-bold skip-nav">
            <Image src={resolvedTheme === "light" ? LightLogo : DarkLogo} width={150} height={40} />
          </a>
          <div className="">
            <NavItem href="/" text="首页" />
            <NavItem href="/about" text="关于我" />
          </div>
          <div className="flex-1"></div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center justify-center transition-all bg-gray-200 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      <nav className="sticky top-0 " style={{ zIndex: 999 }}>
        <div className="flex w-full p-1 text-black bg-opacity-50 bg-gray-50 dark:bg-gray-800 backdrop-blur-md">
          <ul className="container flex max-w-5xl p-2 mx-auto">
            {
              categories.map(category => (
                <Space key={category._id}>
                  <NavItem href={`/?category_id=${category._id}&name=${category.name}`} text={category.name} />
                </Space>
              ))
            }
            {/* <NavItem href="/" text="前端" />
            <NavItem href="/about" text="後端" />
            <NavItem href="/project" text="生活" />
            <NavItem href="/blog" text="IOS" />
            <NavItem href="/snippets" text="運維" /> */}
          </ul>
        </div>
      </nav>

      <main className="flex justify-center min-h-screen px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container max-w-5xl mx-auto">
          {children}
        </div>
      </main>
      <footer className="p-5 text-center text-black">
        LRBlog powered by Next.js
      </footer>
    </div>
  );
};

export default AppLayout;


