import Image from "next/image";
import { fetchAllEntries } from "@/app/lib/cosmosDB";
import { Category } from "@/app/lib/databaseStructure";
import AspectImage from "../ui/aspectImage/AspectImage";
export async function Categories() {
  /*const data =await fetchAllEntries<NextCategories>(
    process.env.CONTENTFUL_SPACE_ID || "",
    process.env.CONTENTFUL_TOKEN || "",
    "nextCategories"
    )
    const imageDataVar = data.items.map((item)=>{
      //@ts-expect-error
      const imgData: ImageCld =item.fields.imageCld[0]
      return {category:item.fields.category, image:  imgData.public_id}})
    */
  const data = await fetchAllEntries<Category>("PRODUCTCATEGORY", "product");

  return (
    <>
      <div className="mt-14 h-max  font-poppins ">
        <span className="text-gray-next-900 text-[32px]  font-semibold leading-4 ">
          Popular Categories
        </span>

        <div className="grid grid-cols-6 w-full gap-6  mt-8">
          {data.map((item, index) => {
            //console.log(cloudinaryLoader({src:item.image.values,width:100}))
            return (
              <div
                className=" flex flex-col  rounded-md border border-gray-next-100 h-max justify-center items-center hover:border-[#2C742F] hover:text-[#2C742F] hover:border-solid hover:shadow-lg hover:shadow-green-next-400"
                key={index}
              >
                <div className="relative w-[190px]  my-4" key={index}>
                  <AspectImage
                    src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/ar_1.4615,c_scale,w_190/${item.image}`}
                    format="ar_1.4615,c_scale,w_190"
                    width="190px"
                    widthAR={190}
                    heightAR={130}
                    alt={item.categoryId}
                  />
                </div>
                <p className=" mb-6 text-lg leading-7 font-medium text-gray-next-900  hover:text-[#2C742F] ">
                  {item.categoryId}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
