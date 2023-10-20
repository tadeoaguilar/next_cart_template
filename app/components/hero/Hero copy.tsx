import Image from "next/image";
import { fetchAllEntries,NextHero,ImageCld  } from "@/app/api/utils/contentful/utils";




export async function Hero() {


  const data =await fetchAllEntries<NextHero>(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_TOKEN,
    "nextHero"
    )
    
    const imageDataVar = data.items.map((item)=>{
      const imgData: ImageCld =item.fields.imageCld[0]
      return { image:  String(imgData.public_id) +"."+ String(imgData.format)  , order: item.fields.order , atext: item.fields.alternateText  }})
  
      
      const image1 = imageDataVar.filter((x)=> x.order ===1) 
      const image2 = imageDataVar.filter((x)=> x.order ===2)
      const image3 = imageDataVar.filter((x)=> x.order ===3)
      

  
  return (
    <>
      <div className=" mx-[--main-x-margin] grid grid-cols-3 grid-rows-2 mt-6 gap-6 h-max font-poppins">
        <div className=" relative row-span-2  col-span-2 w-[872px] h-full min-h-full">
          <div className="relative hero-filter h-full z-10 rounded-[10px] flex flex-col items-center justify-start">
            <div className="flex my-auto flex-col rounded-[10px] self-start ml-8 min-h-max  ">
              <span className=" mx-1 font-semibold  text-5xl text-white-next mb-2 ">
                Fresh & Healthy
              </span>
              <span className=" mx-1 font-semibold  text-5xl text-white-next mb-7">
                Organic Food
              </span>
              <div className="flex mb-7">
                <span className="w-[2px] h-16 bg-[#84D187]"></span>
                <div className="flex flex-col ">
                  <div className="flex  gap-x-2">
                    <span className=" mx-1 pl-3 font-medium leading-8 text-xl text-white-next  ">
                      Sale up to
                    </span>
                    <div className="bg-[#FF8A00] rounded-md px-3 py-1 items-center text-white-next text-xl  font-semibold">
                      30% OFF
                    </div>
                  </div>
                  <span className=" mx-1 pl-3 font-normal text-sm text-white-next">
                    Free shipping on all your order.
                  </span>
                </div>
              </div>
              <div className="flex bg-white-next rounded-[53px] w-max items-center px-10 py-4 ">
                <span className="mr-4 text-[#00B207] text-base font-semibold">
                  Shop now
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                >
                  <path
                    d="M16.5 7.50055H1.5"
                    stroke="#00B307"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                    stroke="#00B307"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
            
          <Image
            src={`https://res.cloudinary.com/${
              process.env.CLOUDINARY_CLOUD_NAME
            }/image/upload/c_crop,x_0,y_0,ar_1.4533/next_hero/${image1[0].image}`}
            alt={String(image1[0].atext)}
            fill={true}
            style={{ objectFit: "fill", borderRadius: "10px" }}
          />
          
        </div>
        <div className="flex flex-col relative w-full h-auto ">
          <span className="z-10 mx-8 mt-8 text-sm font-medium leading-[14px] text-gray-next-900 ">
            SUMMER SALE{" "}
          </span>
          <span className="z-10 mt-2 mx-8 text-[32px] font-semibold leading-9 text-gray-next-900">
            75% OFF{" "}
          </span>
          <span className="z-10 mx-8 mt-3 text-sm font-normal leading-[21px] text-gray-next-900 ">
            Only Fruit & Vegetable
          </span>
          <div className=" z-10 flex items-center mx-8 mt-6 py-4 ">
            <span className="mr-4 text-[#00B207] text-base font-semibold">
              Shop now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M16.5 7.50055H1.5"
                stroke="#00B307"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                stroke="#00B307"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <Image
            src={`https://res.cloudinary.com/${
              process.env.CLOUDINARY_CLOUD_NAME
            }/image/upload/v1694466946/${String(image2[0].image)}`}
            alt={String(image2[0].atext)}
            fill={true}
            style={{
              objectFit: "cover",
              transform: "scaleX(-1)",
              borderRadius: "10px",
            }}
          />
          
        </div>

        <span className=" relative  w-full h-auto ">
          <div className="relative hero-green-filter rounded-[10px] h-full w-full z-10  flex flex-col items-center justify-start">
            <div className="flex flex-col items-center my-auto text-white-next">
              <span className="text-sm font-medium leading-3 mb-3">
                BEST DEAL
              </span>
              <span className="text-[32px] font-semibold  leading-10">
                Special Products
              </span>
              <span className="text-[32px] font-semibold  leading-10">
                Deal of the Month
              </span>
              <div className=" z-10 flex items-center mx-8 mt-6 py-4 ">
                <span className="mr-4 text-[#00B207] text-base font-semibold">
                  Shop now
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                >
                  <path
                    d="M16.5 7.50055H1.5"
                    stroke="#00B307"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.45 1.47552L16.5 7.49953L10.45 13.5245"
                    stroke="#00B307"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <Image
            src={`https://res.cloudinary.com/${
              process.env.CLOUDINARY_CLOUD_NAME
            }/image/upload/v1694466946/${image3[0].image}`}
            alt={String(image3[0].atext)}
            fill={true}
            style={{
              objectFit: "cover",
              transform: "scaleX(-1)",
              borderRadius: "10px",
            }}
          />

        </span>
      </div>
    </>
  );
}
