import React from 'react'
import Image from 'next/image'
import imagePopArt from '../public/assets/bg-mouth.png'

const Quote = ({ text, author, quoteStyle }) => {
  return (
    <li className={'quote col-span-2 ' + quoteStyle}>
        <div className='quote-wrap flex flex-col place-content-center rounded-sm'>
            <h2 className='tracking-tight text-5xl text-center p-1 md:text-[5.5rem]' dangerouslySetInnerHTML={{ __html: text }} />
            {quoteStyle === 'neon-sign' &&
                <figure class="swing">
                    <Image 
                        src={imagePopArt}      
                        alt='Image' 
                        width='150'
                        height='150'
                    />
                </figure>  
            }
            <span className='text-white px-2 text-right m-2 text-xs bg-gradient-to-r from-purple-500 to-pink-500 self-end'>{author}</span>
        </div>
    </li>
  )
}

export default Quote