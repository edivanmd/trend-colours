import CardColor from '../components/CardColor'
import NeonSignQuote from '../components/quotes/NeonSignQuote'
import GlowingStrokeQuote from '../components/quotes/GlowingStrokeQuote'
import dataCards from '../components/data/dataCards'

export default function Home() {
  return (
    <div>
      <main className='flex max-w-[1240px] mx-auto justify-center items-center'> {/* h-screen */}
          <ul className='grid flex-wrap grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-2 p-2'>
            <NeonSignQuote 
              text={''}
              author={'Joseph Addison.'}
            />
            {dataCards.map((dataCard, index) => (       
              <CardColor key={index} dataCard={dataCard} />
              ))
            }
            {/* <GlowingStrokeQuote
              text={'will agree in the dark.'}
              author={'Francis Bacon.'}
            /> */}
            
          </ul>
      </main>
    </div>
  )
}
