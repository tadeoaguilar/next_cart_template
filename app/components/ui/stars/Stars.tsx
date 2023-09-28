import React, { FC } from 'react'

interface paramProps {
    numOfStars: number

}

interface starProps {
    isOrange: boolean

}
const Star:FC<starProps> = ({isOrange}: starProps ) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path d="M6.20663 9.44091L8.57101 10.9387C8.87326 11.1299 9.24826 10.8453 9.15863 10.4924L8.47576 7.80553C8.45647 7.73069 8.45869 7.65192 8.48217 7.57829C8.50566 7.50465 8.54945 7.43914 8.60851 7.38928L10.7288 5.62491C11.007 5.39316 10.8638 4.93078 10.5056 4.90753L7.73701 4.72753C7.66246 4.72224 7.59096 4.69589 7.53081 4.65154C7.47066 4.6072 7.42435 4.54668 7.39726 4.47703L6.36451 1.87678C6.33638 1.80288 6.28647 1.73928 6.22137 1.6944C6.15627 1.64952 6.07907 1.62549 6.00001 1.62549C5.92094 1.62549 5.84374 1.64952 5.77864 1.6944C5.71354 1.73928 5.66363 1.80288 5.63551 1.87678L4.60276 4.47703C4.57572 4.54675 4.52943 4.60734 4.46928 4.65176C4.40913 4.69618 4.33759 4.72259 4.26301 4.72791L1.49438 4.90791C1.13663 4.93078 0.992631 5.39316 1.27126 5.62491L3.39151 7.38966C3.4505 7.43948 3.49424 7.50493 3.51772 7.57849C3.54121 7.65205 3.54347 7.73074 3.52426 7.80553L2.89126 10.2974C2.78363 10.7208 3.23401 11.0624 3.59626 10.8325L5.79376 9.44091C5.85552 9.40164 5.92719 9.38078 6.00038 9.38078C6.07357 9.38078 6.14524 9.40164 6.20701 9.44091H6.20663Z" fill={ isOrange? "#FF8A00" : "#CCCCCC" }/>
        </svg>
        
    )


}

const Stars:FC<paramProps> = (props: paramProps) => {

  return (
    <div className='flex flex-row '>
        {props.numOfStars===0 ? 
        <>
            <Star isOrange={false} /> 
            <Star isOrange={false} />
            <Star isOrange={false} /> 
            <Star isOrange={false} />
            <Star isOrange={false} />
        </> :
            props.numOfStars===1 ?
            
            <>
            <Star isOrange={true} /> 
            <Star isOrange={false} />
            <Star isOrange={false} /> 
            <Star isOrange={false} />
            <Star isOrange={false} />
        </> :
        props.numOfStars===2 ?
            
        <>
        <Star isOrange={true} /> 
        <Star isOrange={true} />
        <Star isOrange={false} /> 
        <Star isOrange={false} />
        <Star isOrange={false} />
        </> :
        props.numOfStars===3 ?
            
        <>
        <Star isOrange={true} /> 
        <Star isOrange={true} />
        <Star isOrange={true} /> 
        <Star isOrange={false} />
        <Star isOrange={false} />
        </> :
        props.numOfStars===4 ?
            
        <>
        <Star isOrange={true} /> 
        <Star isOrange={true} />
        <Star isOrange={true} /> 
        <Star isOrange={true} />
        <Star isOrange={false} />
        </> :
        props.numOfStars===5 ?
            
        <>
        <Star isOrange={true} /> 
        <Star isOrange={true} />
        <Star isOrange={true} /> 
        <Star isOrange={true} />
        <Star isOrange={true} />
        </> :
        <>
        <Star isOrange={true} /> 
        <Star isOrange={true} />
        <Star isOrange={true} /> 
        <Star isOrange={true} />
        <Star isOrange={true} />
        </>
    
    }

    </div>
  )
}

export default Stars