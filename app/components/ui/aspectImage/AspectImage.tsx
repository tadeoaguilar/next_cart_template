import Image from "next/image"
import React from 'react';

interface Props {
    src: string,
    alt: string,
    format: string,
    width: string,
    modifier?: string,
    widthAR:number,
    heightAR:number,
    TopBanner?: React.FC 
    // Define the props for your component here
}

const AspectImage: React.FC<Props> = (props) => {
    // Implement your component logic and JSX here

    return (
        <div className={`relative w-[${props.width}]   `}>  
              {props.TopBanner? <props.TopBanner/> : null}
              <Image
                src= {props.src}
                alt={String(props.alt)}
                
                className={`w-[${props.width}] h-auto ` + props.modifier }
                width={props.widthAR}
                height={props.heightAR}
                
              />
            </div>
    );
};

export default AspectImage;


        