'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { curriculumData } from '@/data/curriculum_pm'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function StructuredCurriculum() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold my-8 text-center">PM/기획 온라인 클래스</h1>
          <Link href="https://www.inflearn.com/users/385756/@damon" target="_blank" rel="noopener noreferrer">
            <div className="mb-8 w-full max-w-[640px] mx-auto aspect-[21/9] overflow-visible rounded-lg cursor-pointer flex justify-center items-center relative">
              <Image
                src="/img/class_cover.png"
                alt="인프런 수강현황"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">인프런 수강기록</span>
            </div>
          </Link>
          <Accordion type="multiple" value={expandedSections} className="space-y-4">
            {curriculumData.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger
                  onClick={() => toggleSection(section.id)}
                  className="text-xl font-semibold bg-gray-100 p-4 rounded-t-lg hover:bg-gray-200 transition-colors"
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{section.title}</span>
                    <span className="bg-primary text-primary-foreground text-sm font-normal py-1 px-3 rounded-full">
                      {section.courses.length} 강의
                      <span className="sr-only">이 섹션에는 {section.courses.length}개의 강의가 있습니다</span>
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-4 p-4 bg-gray-50 rounded-b-lg">
                    {section.courses.map((course) => (
                      <Link key={course.id} href={course.landingUrl} className="block" aria-label={`${course.title} 강의로 이동`}>
                        <Card className="overflow-hidden hover:bg-gray-100 transition-colors cursor-pointer">
                          <div className="flex items-start p-4">
                            <div className="flex-shrink-0 mr-4">
                              <Image
                                src={course.thumbnailUrl}
                                alt={`${course.title} 썸네일`}
                                width={100}
                                height={56}
                                className="rounded-md object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <CardTitle className="text-base font-normal mb-2">
                                {course.title}
                              </CardTitle>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  )
}