import Image from "next/image";
import { fetchAllEntries, NextProducts ,ImageCld, cloudinaryLoader} from "@/app/api/utils/contentful/utils";

export async function PopularProducts() {

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
      <div className=" mx-[--main-x-margin] h-max  font-poppins ">
        <span className="from-gray-next-900 text-[32px] font-semibold leading-4 ">
          Popular Products
        </span>

        <div className="grid grid-cols-6 w-full gap-6  mt-8">
          {imageDataVar.map((item,index) => {
           
            //console.log(cloudinaryLoader({src:item.image.values,width:100}))
            return (
              <div
                className=" flex flex-col  rounded-md border border-gray-next-100 h-max justify-center items-center hover:border-[#2C742F] hover:text-[#2C742F] hover:border-solid hover:shadow-lg hover:shadow-green-next-400"
                key={index}
              >
                <div
                  className="relative  my-4"
                  key={index}
                >
                  <Image
                    src={cloudinaryLoader({
                      src: String(item.image),
                      width: 100,
                      format: "ar_1.1043,c_scale,w_254",
                    })}
                    width={190}
                    height={130}
                    alt={String(item.product.productDescr)}
                    
                    style={{ objectFit: "fill", borderRadius: "10px" }}
                  />
                </div>
                <p className=" mb-6 text-lg leading-7 font-medium text-gray-next-900  hover:text-[#2C742F] ">
                  {String(item.product.price)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
