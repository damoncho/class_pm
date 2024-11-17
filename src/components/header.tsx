import { useState } from 'react'
import Link from 'next/link'

const Header = () => {

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={() => window.location.reload()}>
          <span className="ml-2 text-xl font-bold">데이먼의 PM 일지</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="https://damon.im/" className="text-gray-600 hover:text-gray-900">블로그</Link>
          <Link href="https://damon.im/pkm-class/" className="text-gray-600 hover:text-gray-900">옵시디언 클래스</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header