import { Button } from "@arco-design/web-react";
import Card from 'components/Common/Card'
import TagCard from 'components/Common/TagCard'
import Image from 'next/image'

const Home = () => {
    return (
        <div className="flex flex-col items-start justify-center max-w-2xl pb-16 border-gray-200 dark:border-gray-700 m-5">
            {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
                標籤
            </h3>
            <div className='w-full mb-5'>
                <TagCard />
            </div>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
                熱門文章
            </h3>
            <div className="flex gap-6 flex-col md:flex-row">
                <Card
                    title="Python Web Flask框架教程"
                    slug="style-guides-component-libraries-design-systems"
                    gradient="from-[#D8B4FE] to-[#818CF8]"
                />
                <Card
                    title="React Native 開發音樂App"
                    slug="rust"
                    gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
                />
                <Card
                    title="Vue.js & Nest.js 全棧開發"
                    slug="react-state-management"
                    gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
                />
            </div> */}
        </div>
    )
}

export default Home