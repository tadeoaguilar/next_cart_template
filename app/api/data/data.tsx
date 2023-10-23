import { FC } from "react"
type DataBelowHero = {
    title:string ,
    description:string,
    image: string;   
  
  
  }


const dataBelowHero: DataBelowHero[] = [ 
    {
        title: 'Free Shipping',
        description: 'Free shipping on all order',
        image: "svg1.svg"
        },
        {
          title: 'Customer Support 24/7',
          description: 'Instant access to Support',
          image: "svg2.svg"
          },
          {
            title: '100% Secure Payment',
            description: 'We ensure your money is safe',
            image: "svg3.svg"
            }
            ,
          {
            title: 'Money-Back Guarantee',
            description: '30 Days Money-Back Guarantee',
            image: "svg4.svg"
            }
            
            
        
    
    ]


export {dataBelowHero};

