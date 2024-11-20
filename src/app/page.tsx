import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Header from "@/components/header"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section className="bg-muted py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6">데이먼의 PM 일지 - 온라인 클래스</h1>
            <p className="text-xl max-w-2xl mx-auto">&apos;PM/기획&apos;과 &apos;개인지식관리&apos; 영역의 실무 중심의 강의를 만나보세요!</p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="overflow-hidden">
                <Image src="/img/class_cover.png" alt="pm class" width={400} height={200} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle className="text-2xl">PM/기획 클래스</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">PM/기획자 직무에서 필수적인 지식을 배울 수 있습니다.</p>
                </CardContent>
                <CardFooter className='flex'>
                  <Link href="/pm" className='flex-grow'>
                    <Button className="w-full">자세히 보기</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <Image src="/img/obsidian_info.png" alt="obsidian class" width={400} height={200} className="w-full h-64 object-cover" />
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

      <footer className="bg-background py-6 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          &copy; 2024 데이먼의 PM 일지. All rights reserved.
        </div>
      </footer>
    </div>
  )
}