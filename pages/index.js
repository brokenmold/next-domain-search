import Head from 'next/head'
import Search from '../components/search-results'

import style from '../styles/home.module.scss'

export default function Home() {
  return (
    <div>
      <Head></Head>
      <main>

        <h1>Domain Search</h1>

        <h4>
          Find your piece of digital real estate..
        </h4>

        <div className={style.icon}>
          <div className='fad fa-sign fa-8x'/>
        </div>

        <Search/>

      </main>
    </div>
  )
}