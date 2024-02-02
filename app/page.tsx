import Image from "next/image";
import { PageLayout } from "./components/page-layout";
import { Hero } from "./components/hero/Hero";
import { Categories } from "./components/categories/Categories";
import { PopularProducts } from "./components/PopularProducts/PopularProducts";
import { StoreProvider } from "./components/StoreProvider/StoreProvider";
import { BelowHero, BelowHeroItem } from "./components/belowHero/BelowHero";

import { dataBelowHero } from "./api/data/data";
import { OfferBanner } from "./components/offers/OfferBanner/OfferBanner";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  console.log("session", session);
  const dataBelow = dataBelowHero;

  return (
    <>
      <Hero />

      <BelowHero>
        {dataBelowHero.map((item, index) => {
          return (
            <BelowHeroItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </BelowHero>
      <Categories />
      <StoreProvider>
        <PopularProducts />
      </StoreProvider>

      <OfferBanner />
    </>
  );
}
