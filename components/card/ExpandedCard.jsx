import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion"
import styles from '../../styles/ExpandedCard.module.css'

const ExpandedCard = ({handleClose, dataCard}) => {

  return (
    <motion.div className='fixed inset-0 z-50 overflow-y-auto' layoutId={dataCard.nameColor}>
      
      <motion.div
        className={styles.gradientBg + ' fixed inset-0 w-full h-full opacity-90'}
        style={{backgroundColor: `${dataCard.codeColor}`}}
        onClick={handleClose} 
      ></motion.div>
      
      <motion.div className='flex items-center w-[65%] h-full m-auto'>
        <motion.div className="relative mx-auto flex flex-col place-items-center">
          <button onClick={handleClose} className='absolute -top-5 -right-4 self-end mb-2 w-10 h-10 border-2 rounded-full transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-finger'>X</button>
            
          <motion.div className='p-5 rounded-md shadow-lg' style={{backgroundColor: `${dataCard.codeColor}`}}>
            <motion.div className='flex content-between items-center mb-2 divide-x'>
              <motion.h2 className='font-finger text-white text-4xl text-left pr-5'>{dataCard.title}</motion.h2>
              {/* <motion.p className='hidden md:inline font-roboto text-md font-light text-white leading-5 pl-5' dangerouslySetInnerHTML={{ __html: dataCard.text }} /> */}
            </motion.div>
            <Image
                // className='w-2/3'
                src={dataCard.image} 
                priority
                alt='Image' 
                />
          </motion.div>

        </motion.div>
      </motion.div>
      
    </motion.div>
  )
}

export default ExpandedCard

