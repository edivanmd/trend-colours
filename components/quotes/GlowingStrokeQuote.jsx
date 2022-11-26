import React from 'react'
import styles from '../../styles/GlowingStrokeQuote.module.css'

const GlowingStrokeQuote = ({ text, author }) => {
  return (
    <li className='quote col-span-2 flex'>
        <div className='flex flex-col place-content-center rounded-md bg-[#111111] m-auto w-[100%] h-[100%] py-5'>
            <h2 className={styles.GlowingStrokeH2 + ' tracking-tight text-4xl text-center p-5 md:text-[2.5rem] '}>
                <p className='leading-[0rem]'>
                  <span className='inline-block ml-7'>All</span> 
                  <br/>
                  <span className={styles.span + ' text-6xl md:text-8xl'}>C</span>
                  <span className={styles.span + ' text-6xl md:text-8xl'}>o</span>
                  <span className={styles.span + ' text-6xl md:text-8xl'}>l</span>
                  <span className={styles.span + ' text-6xl md:text-8xl'}>o</span>
                  <span className={styles.span + ' text-6xl md:text-8xl'}>u</span>
                  <span className={styles.span + ' text-6xl md:text-8xl'}>r</span>
                  <span className={styles.span + ' text-6xl md:text-8xl'}>s</span>
                  <br/>
                </p>
                {text}
            </h2>
            <span className='text-white px-2 text-right m-2 text-xs bg-gradient-to-r from-purple-500 to-pink-500 self-end'>{author}</span>
        </div>
    </li>
  )
}

export default GlowingStrokeQuote