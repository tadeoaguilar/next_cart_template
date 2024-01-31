'use client'
import { onClickSubmitCart } from '../lib/cartActions';
import { OrderDetail } from '../lib/databaseStructure';
import { MouseEvent, use, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import AspectImage from "@/app/components/ui/aspectImage/AspectImage";
import {cartAddItem}  from "@/app/reducers/cartReducers";

export const  CartDetail = () => {
  const [isClient, setIsClient] = useState(false)
  const [numSubTotal, setNumSubTotal] = useState(0)
  const [response01, setResponse01] = useState("")
  const data = useAppSelector(state => state.userCart);
  const [cart, setCart] = useState(data);
  const dispatch = useAppDispatch();
  const calculateSubTotal = (cart: OrderDetail[]) => {
    return cart.reduce((price, item) => price + item.price * item.quantity, 0).toFixed(2);
  
  }
 const onClickUpdateCart = (item: OrderDetail ,value: number ) => {
    console.log("clicked",item.productId)
    if (item.quantity + value <= 0) {
        alert("Quantity can't be less than 1");
      return
    }


      
    dispatch(cartAddItem({
                            
      "productId": item.productId,
      "name": item.name,
      "quantity": value,
      "price":item.price,
      "image":item.image,
   
    }))
    
 }
  


  useEffect(() => {
    setCart(data);
    setIsClient(true);  
    setNumSubTotal(Number(calculateSubTotal(data)));
  }, [ data]);



  
  return (
    <>
        {
           <>
          <div  className="flex  basis-1/2 items-center justify-center text-3xl font-semibold w-full my-10 "> My Shopping Cart
              </div>
            <div  className="flex gap-7"> 
              
              
           <div  className="flex flex-col basis-4/6 mx-5 border border-gray-next-100 rounded-lg ">
              <div className="flex flex-row items-center justify-center font-medium text-gray-next-500 px-5 py-4 uppercase border-b border-b-gray-next-100 ">
                  <div className=" basis-1/6"> Product</div>
                  <div className=" basis-1/5"> </div>
                  <div className=" basis-1/5"> Price</div>
                  <div className=" basis-1/5"> Quantity</div>
                  <div className=" basis-1/5"> Total</div> 
                </div>
              { isClient &&
                cart.map((item,index) => {
                    return (
  
                    <div className="flex flex-row items-center justify-center px-5 text-base font-poppins border-b border-b-gray-next-100" key = {item.productId} >
                         <div className="flex basis-1/6 ">
                         <AspectImage                          
                          src= {`https://res.cloudinary.com/do7uf4vlt/image/upload/ar_1.00,c_scale,w_100/${item.image}.jpg`}
                          format= "ar_1.00,c_scale,w_100"                            
                          width="100px"
                          widthAR={100} 
                          heightAR={100}
                          alt={String(item.name)} 
                          modifier=" border-gray-next-100"
                          />
                          </div>
                          <div className=" basis-1/5 "> {item.name}</div>
                          
                          <div className=" basis-1/5 "> {`$${item.price.toFixed(2)}`}</div>
                          <div className="  flex basis-1/5 justify-start"> 
                            <div className="border border-gray-next-100 rounded-2xl p-1">
                              <button className="rounded-full w-8 h-8  bg-gray-next-300 px-2" onClick={() => onClickUpdateCart(item , -1)} >-</button>
                                <label className="px-6 self-center">  {item.quantity} </label>
                              <button className="rounded-full w-8 h-8  bg-gray-next-300 px-2" onClick={() => onClickUpdateCart(item , +1)} >+</button>
                            </div>
                          </div>
                          <div className=" pl-1 basis-1/5 "> {`$${(item.quantity * item.price).toFixed(2)} `}</div>
                    </div>
  
  
  
                    )            
                    })  
    
              }
          
        </div>         
        <div  className="flex flex-col  basis-2/6 p-6 border border-gray-next-100 rounded-lg"> 
          <h1 className='from-gray-next-900 font-medium text-xl '>Cart Total  </h1>
          <div className='flex flex-row justify-between text-gray-next-700 font-normal text-sm mt-5 border-b border-b-gray-next-100 py-3'>
            <h1 className=''>Subtotal </h1>
            <h1 className='font-semibold'>{`$ ${numSubTotal}`} </h1>
          </div>
          <div className='flex flex-row justify-between text-gray-next-700 font-normal text-sm mt-5 border-b border-b-gray-next-100 py-3'>
              <h1 className=''>Shipping </h1>
              <h1 className=' font-semibold'>$ 0.00 </h1>
          </div>
          <div className='flex flex-row justify-between text-gray-next-700 font-semibold text-sm mt-5 border-b border-b-gray-next-100 py-3'>
              <h1 className=''>Total </h1>
              <h1 className=''> {`$ ${numSubTotal}`}</h1>
          </div>

          <button 
          onClick={async() => { 
            const response: any= await onClickSubmitCart(cart)
            setResponse01(response.queue? response.queue: {})
            console.log("response",response01)
          }}
          className='flex h-[48px]  items-center justify-center  rounded-md bg-primary-next text-gray-next-50  '> 
          Proceed to Checkout
          </button>

          {response01.length >0?
            <h1>Orden:{JSON.stringify(response01)}</h1>
            :<> </>
          }
        
        </div> 
          
        </div>
        </>
        }
    </>
      
  );
};