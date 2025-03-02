'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function DocLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="w-full h-full flex pt-24">
      <div className="w-1/4 h-full mx-2 flex flex-col items-center">
        <ul className="fixed h-full w-1/4 max-w-48 list-none space-y-2">
          <li className={"z-10 w-full h-12 hover:bg-gray-100 rounded-lg" + (pathname === '/docs' ? ' bg-gray-100' : '')}>
            <Link href="/docs" className="w-full h-full text-indigo-500 font-semibold flex justify-center items-center">
              Mac安装
            </Link>
          </li>
          <li className={"z-10 w-full h-12 hover:bg-gray-100 rounded-lg" + (pathname === '/docs/faq' ? ' bg-gray-100' : '')}>
            <Link href="/docs/faq" className="w-full h-full text-indigo-500 font-semibold flex justify-center items-center">
              常见问题
            </Link>
          </li>
          <li className={"z-10 w-full h-12 hover:bg-gray-100 rounded-lg" + (pathname === '/docs/interview' ? ' bg-gray-100' : '')}>
            <Link href="/docs/interview" className="w-full h-full text-indigo-500 font-semibold flex justify-center items-center">
              面试模式
            </Link>
          </li>
          <li className={"z-10 w-full h-12 hover:bg-gray-100 rounded-lg" + (pathname === '/docs/exam' ? ' bg-gray-100' : '')}>
            <Link href="/docs/exam" className="w-full h-full text-indigo-500 font-semibold flex justify-center items-center">
              笔试模式 
            </Link>
          </li>
          <li className={"z-10 w-full h-12 hover:bg-gray-100 rounded-lg" + (pathname === '/docs/copilot' ? ' bg-gray-100' : '')}>
            <Link href="/docs/copilot" className="w-full h-full text-indigo-500 font-semibold flex justify-center items-center">
              连接副屏
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-3/4 h-full pl-4">
        {children}
      </div>
    </div>
  )
}
