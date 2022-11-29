import React from 'react'
import Image from 'next/image'


const CardColor = ({ dataCard }) => {
  return (
    <li className='card bg-white' style={{backgroundColor: `${dataCard.hexaColor}`}}>
      <h2 className='font-finger text-white text-2xl text-center'>{dataCard.title}</h2>
      <Image 
        className='w-auto'
        src={dataCard.image} 
        priority
        alt='Image' 
        width={200}
        height={200}
      />
    </li>
  )
}

export default CardColor