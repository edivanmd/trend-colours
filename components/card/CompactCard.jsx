import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

const CompactCard = ({ dataCard, onExpand, disabled }) => {
  return (
    <motion.li 
        onClick={disabled ? undefined : onExpand} 
        className='card bg-white' 
        style={{backgroundColor: `${dataCard.codeColor}`}}
    >
        <motion.h2 className='font-finger text-white text-2xl text-center'>{dataCard.title}</motion.h2>
        <motion.div>
            <Image
            className='w-auto h-[100%]'
            src={dataCard.image} 
            priority
            alt='Image' 
            width={200}
            height={200}
            />
        </motion.div>
    </motion.li>
)
}

export default CompactCard