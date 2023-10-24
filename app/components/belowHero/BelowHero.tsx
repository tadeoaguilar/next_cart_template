import Image from 'next/image'
import React ,{FC}from 'react'

type Props = {
  children: React.ReactNode
}

type PropsItems = {
  title:string ,
  description:string,
  image: string


}

const BelowHero: FC<Props> = ({children}) => {
  return (
    <div className=' flex  mt-6 h-max rounded-lg shadow-md justify-between items-center p-10'>
        {children}
    </div>
  )
}

const BelowHeroItem: FC<PropsItems> = (props:PropsItems) => {
     
  return (
    <div className=' flex flex-row items-center mt-6 h-max  gap-4'>
        <div >
            <Image src={props.image} alt="alt" width={40} height={40} />
        </div>
        <div className='flex flex-col gap-2 '>
          <p className=" text-base font-semibold leading-5 "> {props.title} </p>
          <p className="text-sm font-normal leading-5"> {props.description} </p>
        </div>

    </div>
  )
}






export { BelowHero,BelowHeroItem };
