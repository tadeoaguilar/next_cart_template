
import Image from "next/image";
import { PageLayout } from "@/app/components/page-layout";
import { Hero } from "@/app/components/hero/Hero";
import { Categories } from "@/app/components/categories/Categories";
import { PopularProducts } from "@/app/components/PopularProducts/PopularProducts";
import { StoreProvider } from "@/app/components/StoreProvider/StoreProvider";
import { BelowHero, BelowHeroItem } from "@/app/components/belowHero/BelowHero";

import { dataBelowHero } from "@/app/api/data/data";
import { OfferBanner } from "@/app/components/offers/OfferBanner/OfferBanner";
import { auth } from "@/auth";
import { CartDetail } from "./cart-detail";
export  const Page = () => {
    // Your code here

    
        
    return (
        <>
            <StoreProvider>
                <CartDetail />
            </StoreProvider>
        
        </>
    );
}

export default Page;