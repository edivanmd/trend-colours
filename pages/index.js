import CardColor from '../components/CardColor'
import NeonSignQuote from '../components/quotes/NeonSignQuote'
import GlowingStrokeQuote from '../components/quotes/GlowingStrokeQuote'

const infoCards = [
  {
      title: "Title 2",
      image: 'https://images.unsplash.com/photo-1570075017462-b5478b3abfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80',
      color: '#AA4E3B',
      size: 'card-md',
      width: '285',
      height: '318',
  },
  {
      title: "Title 3",
      image: 'https://images.unsplash.com/photo-1664123212369-87640d62f17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80',
      color: '#8D7CE9',
      size: 'card-md',
      width: '277',
      height: '198',
  },
  {
      title: "Title 4",
      image: 'https://images.unsplash.com/photo-1664123212369-87640d62f17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80',
      color: '#B871B0',
      size: 'card-sm',
      width: '277',
      height: '415',
  },
  {
    title: "Title 5",
    image: 'https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    color: '#5C9984',
    size: 'card-lg',
    width: '280',
    height: '170',
},
{
    title: "Title 6",
    image: 'https://images.unsplash.com/photo-1570075017462-b5478b3abfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80',
    color: '#AA4E3B',
    size: 'card-md',
    width: '285',
    height: '318',
},
{
    title: "Title 7",
    image: 'https://images.unsplash.com/photo-1664123212369-87640d62f17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80',
    color: '#8D7CE9',
    size: 'card-md',
    width: '277',
    height: '198',
},
{
    title: "Title 8",
    image: 'https://images.unsplash.com/photo-1664123212369-87640d62f17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80',
    color: '#B871B0',
    size: 'card-lg',
    width: '277',
    height: '415',
}
]

export default function Home() {
  return (
    <div>
      <main className='flex max-w-[1240px] mx-auto justify-center items-center'> {/* h-screen */}
          <ul className='grid flex-wrap grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-2 p-2'>
            <GlowingStrokeQuote
              text={'will agree in the dark.'}
              author={'Francis Bacon.'}
            />
            {infoCards.map((infoCard, index) => (       
              <CardColor key={index} infoCard={infoCard} />
              ))
            }
            <NeonSignQuote 
              text={"all"}
              author={'Joseph Addison.'}
            />
          </ul>
      </main>
    </div>
  )
}
