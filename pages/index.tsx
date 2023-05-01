import Header from '@/components/Header'
import Analyzer from '@/components/frequence'
import TimeLine from '@/components/TimeLine'




export default function Home(): JSX.Element {
  return (
    <main className='bg-stone-900'>
      <Header />
      <TimeLine />


      {/* <Analyzer /> */}
    </main >
  )
}


