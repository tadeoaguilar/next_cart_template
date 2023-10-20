import Image from "next/image";
import { fetchAllEntries, NextCategories ,ImageCld, cloudinaryLoader} from "@/app/api/utils/contentful/utils";

export async function Categories() {

  const data =await fetchAllEntries<NextCategories>(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_TOKEN,
    "nextCategories"
    )
    const imageDataVar = data.items.map((item)=>{
      const imgData: ImageCld =item.fields.imageCld[0]
      return {category:item.fields.category, image:  imgData.public_id}})
  return (
    <>
      <div className="w-[--template-max-width] mx-auto mt-14 h-max  font-poppins ">
        <span className="text-gray-next-900 text-[32px]  font-semibold leading-4 ">
          Popular Categories
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
                      width: 190,
                      format: "ar_1.4615,c_scale,w_190",
                    })}
                    width={190}
                    height={130}
                    alt={String(item.category)}
                    
                    style={{ objectFit: "fill", borderRadius: "10px" }}
                  />
                </div>
                <p className=" mb-6 text-lg leading-7 font-medium text-gray-next-900  hover:text-[#2C742F] ">
                  {String(item.category)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
