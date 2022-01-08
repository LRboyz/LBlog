import Image from "next/image"


export default function About() {
    return (
        <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col pr-8">
                <h1 className="mb-5 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    LRboy
                </h1>
                <h2 className="mb-4 text-gray-700 dark:text-gray-200">
                    <span className='font-semibold'>前端開發工程師</span>
                </h2>
                <p className="mb-16 text-gray-600 dark:text-gray-400">
                    👋 This Web Powered By React / Next.js. If you are interested in my project, welcome to communicate with me.
                </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                <Image
                    alt="LRboy"
                    height={176}
                    width={176}
                    src="/icons/avatar.svg"
                    className="rounded-full filter grayscale"
                />
            </div>
        </div>
    )
}