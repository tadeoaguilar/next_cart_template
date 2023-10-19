import React from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt }) => {
    return (
        <div className='relative w-[20%] ' >
            <Image
                src={imageSrc}
                alt={imageAlt}
                
                className='w-full h-auto'
                width={872}
                height={600}
            />
        </div>
    );
};

export default Card;
