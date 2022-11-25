import React from 'react'
import Image from 'next/image'


const CardColor = ({ infoCard }) => {
  return (
    <li className={'card bg-black ' + infoCard.classes }>
      <h2>{infoCard.title}</h2>
      <Image src={infoCard.image} 
        priority
        alt='Image' 
        width='200'
        height='200'
      />
    </li>
  )
}

export default CardColor