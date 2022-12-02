import React, { useState } from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import ExpandedCard from './ExpandedCard'


const CardColor = ({ dataCard }) => {
  
  let router = useRouter();
  
  const [selectedId, setSelectedId] = useState(null)

  const handleClose = () =>  { 
    setSelectedId(null); 
    router.push("/");
    console.log('ki')
  }

  return (
    <>
      <motion.div 
        style={{backgroundColor: `${dataCard.codeColor}`}}
        className='rounded-lg p-3 cursor-pointer' 
        layoutId={dataCard.nameColor} 
        onClick={() => setSelectedId(dataCard.nameColor)}
      > 
        <motion.h2 className='font-finger text-white text-2xl text-center'>{dataCard.title}</motion.h2>
        <Image
          src={dataCard.image} 
          priority
          alt='Image'
        />
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <ExpandedCard dataCard={dataCard} handleClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  )
}

export default CardColor