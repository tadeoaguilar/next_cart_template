import Image from "next/image";
import { fetchAllEntries, NextProducts ,ImageCld, cloudinaryLoader} from "@/app/api/utils/contentful/utils";
import Stars from "../ui/stars/Stars";
import { MeasureMemoryMode } from "vm";

export async function PopularProducts() {
  const totalPrice= (price:number, perc: number): number =>{
      console.log("price",price)
      console.log("perc",perc)
      console.log("resul",perc > 0?
      (price*(perc/100)).toFixed(2) :price)
      return  
        perc > 0?
          (price*(perc/100)).toFixed(2) :price

  }
  const data =await fetchAllEntries<NextProducts>(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_TOKEN,
    "nextProducts"
    )
    const imageDataVar = data.items.map((item)=>{
      const imgData: ImageCld =item.fields.image[0]
      return {product:{...item.fields}, image:  imgData.public_id}})
  return (
    <>
      
      <div className=" mx-[--main-x-margin] mt-14 h-max  font-poppins mb-2 ">
        <span className="text-gray-next-900 text-[32px] font-semibold leading-4 ">
          Popular Products
        </span>

        <div className=" grid grid-cols-5 w-full gap-6  mt-8">
          {imageDataVar.map((item,index) => {
           
            
            return (
              <>
                
                <div
                  className=" flex flex-col  border border-gray-next-100 h-max items-center hover:border-[#2C742F] hover:text-[#2C742F] hover:border-solid hover:shadow-lg hover:shadow-green-next-400"
                  key={index}
                >
                
                  
                  <div
                    className="relative m-1 "
                    key={index}
                  >
                      {item.product.offerText?
                      <div className="absolute w-max ml-3 mt-3  font-normal py-1 px-2 text-sm text-white-next bg-danger text-">
                        {item.product.offerText.toString() }
                     </div>:
                     <></>

                     }
                    <Image

                      src={cloudinaryLoader({
                        src: String(item.image),
                        width: 100,
                        format: "ar_1.1043,c_scale,w_254",
                      })}
                      width={254}
                      height={230}
                      alt={String(item.product.productDescr)}
                      
                      style={{ objectFit: "fill", borderRadius: "10px" }}
                    />
                  </div>
                  <div className=" self-start  w-[85%] m-3 text-sm font-normal text-gray-next-700  hover:text-[#2C742F] ">
                      <h1>
                        {String(item.product.productDescr)}
                      </h1>
                      <div className=" flex flex-row items-center justify-between">
                        <div className="flex flex-row ">                                                  
                            <span className="text-base font-poppins font-semibold leading-6 text-gray-next-900">
                              ${
                               (item.product.price as number * (1-(item.product.offerPercentage as number))).toFixed(2)
                              } 
                            </span>
                            {item.product.offerPercentage as number > 0?
                              <span className="text-base ml-1 font-normal leading-6 text-gray-next-400 line-through">
                                ${
                                  (item.product.price as number).toFixed(2)
                                } 
                              </span>
                              : <></>
                            }
                        </div>
                          <div className=" flex justify-center items-center  w-10 h-10  leading-9 rounded-full bg-green-next-50 ">                        
                            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                              <path d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333" stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                         
                          </div>
                      </div>
                      <div className="flex flex-row "> 
                        <Stars numOfStars={Number(item.product.stars)} />
                      </div>
                  </div>
               
                </div>
                
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
