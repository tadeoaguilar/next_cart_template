import Image from 'next/image'
import { PageLayout } from './components/page-layout'
import { Hero } from './components/hero/Hero'
import { Categories } from './components/categories/Categories'
export default async function Home() {
  return (
    <>
    <PageLayout>
    <Hero/>

    <main className="bg-white-next">
      
    </main>
    </PageLayout>
    </>
  )
}
