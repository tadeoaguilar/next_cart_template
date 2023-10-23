import Image from "next/image";
import { PageLayout } from "./components/page-layout";
import { Hero } from "./components/hero/Hero";
import { Categories } from "./components/categories/Categories";
import { PopularProducts } from "./components/PopularProducts/PopularProducts";
import {BelowHero,BelowHeroItem} from "./components/belowHero/BelowHero";
import { isAwaitExpression } from "typescript";
import { FC } from "react";
export default async function Home() {

  type DataBelowHero = {
    title:string ,
    description:string,
    image: string
  
  
  }
  const response = await  fetch("https://vercel.com/tadeoaguilar/next-cart-template/DUwx5CgGmgMbfVzDohfJDnhyAnua/api/ui/belowHero",{cache:'no-store'})
  const dataBelowHero: DataBelowHero[] = await response.json();

  
  return (
    <>

      <PageLayout>
       
        <Hero />

        <main className="bg-white-next">
          <BelowHero>
              {

                dataBelowHero.map((item:DataBelowHero, index)=>{
                  
                  return(
                    <BelowHeroItem key={index} title={item.title} description={item.description} image={item.image} />
                  )
                })
              
              
              }
          </BelowHero>
          <Categories />
          <PopularProducts />
        
        </main>
      </PageLayout>
    </>
  );
}
