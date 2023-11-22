import Image from "next/image";
import  {EntryFieldTypes, createClient, EntryCollection } from 'contentful';
import { NextResponse, NextRequest } from "next/server";


export type ImageCld ={
  url:EntryFieldTypes.Text,
  tags: [],
  type: EntryFieldTypes.Text,
  bytes: EntryFieldTypes.Number,
  width: EntryFieldTypes.Number,
  format: EntryFieldTypes.Text,
  height: EntryFieldTypes.Number,
  version: EntryFieldTypes.Number,
  duration: null,
  metadata: [],
  public_id: EntryFieldTypes.Text,
  created_at: EntryFieldTypes.Text,
  secure_url: EntryFieldTypes.Text,
  resource_type: EntryFieldTypes.Text,
  original_url: EntryFieldTypes.Text,
  original_secure_url: EntryFieldTypes.Text,
  raw_transformation: EntryFieldTypes.Text,
}
export type NextCategories = {
  contentTypeId: "nextCategories"
  fields:{
        category: EntryFieldTypes.Text,
        imageCld:  ImageCld[],
        order:EntryFieldTypes.Number
        }
}
export type NextOfferBanner = {
  contentTypeId: "nextBannerOffer"
  fields:{
        title: EntryFieldTypes.Text,
        title2: EntryFieldTypes.Text,
        buttonDesc: EntryFieldTypes.Text,
        image:  ImageCld[],
       
        }
}
export type NextProducts = {
  contentTypeId: "nextProducts"
  fields:{
        productId: EntryFieldTypes.Text,
        productDescr:EntryFieldTypes.Text,
        price: EntryFieldTypes.Number
        isOffer: EntryFieldTypes.Boolean,
        offerPercentage: EntryFieldTypes.Number,
        offerText:EntryFieldTypes.Text ,
        image:  ImageCld[],
        stars: EntryFieldTypes.Number,
        category:EntryFieldTypes.Text,
        
        
        }
}
export type NextHero = {
  contentTypeId: "nextHero"
  fields:{
        image: EntryFieldTypes.Text,
        alternateText: EntryFieldTypes.Text,
        imageCld:  ImageCld[],
        order:EntryFieldTypes.Number
        }
}
export type ProductType = {
  productId: EntryFieldTypes.Text,
  productDescr:EntryFieldTypes.Text,
  price: EntryFieldTypes.Number
  isOffer: EntryFieldTypes.Boolean,
  offerPercentage: EntryFieldTypes.Number,
  offerText:EntryFieldTypes.Text ,
  image:  ImageCld[],
  stars: EntryFieldTypes.Number,
  category:EntryFieldTypes.Text,  
  imagename: ImageCld} & ImageCld
type ContentfulContent  = "nextHero" | "nextCategories" | "nextProducts" | "nextBannerOffer"
type ContentfulContentTypes  = NextHero | NextCategories | NextProducts | NextOfferBanner

export async function fetchAllEntries<T extends ContentfulContentTypes>(
  spaceId: string,
  accessToken: string,
  contentType: ContentfulContent
): Promise<EntryCollection<T>> {
  const client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });
  try {
    const entries = await client.getEntries<T>({
      content_type: contentType
    });    
    return entries;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
}

type propsImageLoader = {
  src: string;
  width: number;
  format?: string;
  quality?: number;
};
export const cloudinaryLoader = (param: propsImageLoader) => {
  const url = `https://res.cloudinary.com/${
    process.env.CLOUDINARY_CLOUD_NAME
  }/image/upload/${param.format}/${normalizeSrc(param.src)}`;
  
  return url;
};



const normalizeSrc = (src: string) => (src[0] === "/" ? src.slice(1) : src);


 async function GET() {
  const contentfulClient = await createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_TOKEN || "",
  });
  
  
  
  

  const res =await fetchAllEntries<NextHero>(
    process.env.CONTENTFUL_SPACE_ID || "",
    process.env.CONTENTFUL_TOKEN || "",
    "nextHero"
    )
 //@ts-expect-error
  const imageEntry:ImageCld = res.items[0].fields.imageCld[0]
  return (NextResponse.json({"one":res.items[0].fields.image,"two": imageEntry.public_id }))
}

