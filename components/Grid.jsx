import React from 'react'
import Link from 'next/link'
import CardColor from './card/CardColor'
import dataCards from '../components/data/dataCards'
import NeonSignQuote from '../components/quotes/NeonSignQuote'
import GlowingStrokeQuote from '../components/quotes/GlowingStrokeQuote'
import { motion } from "framer-motion"

const Grid = () => {

  return (
    <ul className='grid grid-cols-2 gap-4'>
        <NeonSignQuote />
        {dataCards.map((dataCard, index) => (    
          <li key={index}>

              <CardColor dataCard={dataCard} />

          </li>   
        ))}

    </ul>
  )
}

export default Grid