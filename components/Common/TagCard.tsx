import cn from 'classnames'
import Link from 'next/link'

export default function TagCard() {
    return (
        <div className={cn(
            'transform hover:scale-[1.01] transition-all',
            'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
            "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
            "shadow-lg"
        )}>
            <div className='p-6 bg-white rounded-lg dark:bg-gray-900'>

            </div>
        </div>
    )
}