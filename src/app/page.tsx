import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section className="bg-muted py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6">데이먼의 PM 일지 - 온라인 클래스</h1>
            <p className="text-xl max-w-2xl mx-auto"><span className="bg-yellow-200 text-black p-1 rounded inline-block" style={{ lineHeight: '0.1', padding: '0.1em 0.2em 0.6em 0.2em', verticalAlign: 'baseline' }}>PM/기획</span>과 <span className="bg-[#D3FFA3] text-black p-1 rounded inline-block" style={{ lineHeight: '0.1', padding: '0.1em 0.2em 0.6em 0.2em', verticalAlign: 'baseline' }}>개인지식관리</span> 분야의 핵심 강의를 만나보세요!</p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="overflow-hidden">
              <Image src="/img/class_cover.png" alt="pm class" width={400} height={200} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-2xl">PM/기획 클래스</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">PM/기획자 직무에서 참고할 수 있는 필수적인 지식을 배울 수 있습니다.</p>
                </CardContent>
                <CardFooter className='flex'>
                  <Link href="/pm" className='flex-grow'>
                    <Button className="w-full">자세히 보기</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
              <Image src="/img/obsidian_info.png" alt="obsidian class" width={400} height={200} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-2xl">옵시디언 클래스</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">세컨드 브레인, 개인지식관리를 위한 Obsidian 핵심 노하우를 학습합니다.</p>
                </CardContent>
                <CardFooter className='flex'>
                  <Link href="/obsidian" className='flex-grow'>
                    <Button className="w-full">자세히 보기</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}