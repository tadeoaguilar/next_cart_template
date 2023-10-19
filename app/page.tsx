import Image from "next/image";
import { PageLayout } from "./components/page-layout";
import { Hero } from "./components/hero/Hero";
import { Categories } from "./components/categories/Categories";
import { PopularProducts } from "./components/PopularProducts/PopularProducts";
import BelowHero from "./components/belowHero/BelowHero";
import Card from "./store";
export default async function Home() {
  return (
    <>
      <PageLayout>
        <Hero />

        <main className="bg-white-next">
          <BelowHero />
          <Categories />
          <PopularProducts />
          <Card title= {"Test"} imageSrc="/Home.jpg" imageAlt="None" description="Des" />
        </main>
      </PageLayout>
    </>
  );
}
