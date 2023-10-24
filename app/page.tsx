
import Image from "next/image";
import { PageLayout } from "./components/page-layout";
import { Hero } from "./components/hero/Hero";
import { Categories } from "./components/categories/Categories";
import { PopularProducts } from "./components/PopularProducts/PopularProducts";
import {BelowHero,BelowHeroItem} from "./components/belowHero/BelowHero";
import { isAwaitExpression } from "typescript";
import { FC } from "react";
import { dataBelowHero } from "./api/data/data";
import {OfferBanner} from "./components/offers/OfferBanner/OfferBanner";


export default async function Home() {


 
  const dataBelow= dataBelowHero

  
  return (
    <>
      
      <PageLayout>
       
        <Hero />

        <main className="bg-white-next font-poppins">
          <BelowHero>
              {

                dataBelowHero.map((item, index)=>{
                  
                  return(
                    <BelowHeroItem key={index} title={item.title} description={item.description} image={item.image} />
                  )
                })
              
              
              }
          </BelowHero>
          <Categories />
          <PopularProducts />
          <OfferBanner  />
        </main>
      </PageLayout>
      
    </>
  );
}
