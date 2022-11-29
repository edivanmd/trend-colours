import React from 'react'
import styles from '../../styles/OldTvQuote.module.css'

const OldTvQuote = () => {
  return (
    <li className='quote col-span-3 flex'>
        <div className={styles.oldTv + ' flex'}>
            <div className={styles.screen}>
                <div className={styles.errorNoise}>
                    <div className={styles.errorEffect}>
                        <div className={styles.oldTvContent}></div>
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default OldTvQuote