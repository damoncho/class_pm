import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          aria-label="메뉴 열기"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-2">
          <Link href="https://damon.im" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">블로그</Link>
          <Link href="https://damon.im/pkm-class/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">옵시디언 클래스</Link>
        </nav>
      )}
    </header>
  )
}

export default Header