import Link from 'next/link'

const Header = () => {

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="ml-2 text-xl font-bold">데이먼의 PM 일지</span>
        </Link>
        <nav className="flex flex-wrap space-x-4 mt-2 md:mt-0">
          <Link href="/" className="text-gray-600 hover:text-gray-900">홈</Link>
          <Link href="/pm" className="text-gray-600 hover:text-gray-900">PM/기획 클래스</Link>
          <Link href="/obsidian" className="text-gray-600 hover:text-gray-900">옵시디언 클래스</Link>
          <Link href="https://damon.im/" className="text-gray-600 hover:text-gray-900">블로그</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header