import React from 'react'
import Image from 'next/image'
import imagePopArt from '../../public/assets/bg-mouth.png'
import styles from '../../styles/NeonSignQuote.module.css'

// dangerouslySetInnerHTML={{ __html: text }}

const NeonSignQuote = ({ title, text, author }) => {
  return (
    <li className={styles.neonSign + ' quote col-span-2'}>
        <div className= {styles.quoteWrap + ' flex flex-col place-content-center rounded-sm'}>
            <h2 className= {styles.quoteH2 + ' tracking-tight text-5xl text-center p-1 md:text-[4.8rem]'} > 
                <p className={'mb-2 text-8xl md:text-[6rem]'}><span className={styles.fastFlicker}>C</span>olour<span  className={styles.swing2}>s</span></p>
                spea<span className={styles.flicker}>k</span> {text} langu<span className={styles.flicker2}>a</span><span className={styles.flicker3}>g</span>es.
            </h2>
            <figure className={styles.swing}>
                <Image 
                    src={imagePopArt}      
                    alt='Image' 
                    width='150'
                    height='150'
                />
            </figure>  
            <span className='text-white px-2 text-right m-2 text-xs bg-gradient-to-r from-purple-500 to-pink-500 self-end'>{author}</span>
        </div>
    </li>
  )
}

export default NeonSignQuote