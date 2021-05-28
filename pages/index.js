import Head from 'next/head'

import style from '../styles/home.module.scss'

export default function Home() {
  return (
    <div>
      <Head></Head>
      <main>

        <h1>Domain Search</h1>

        <div>
          Basic Domain Search using Next.js
        </div>

        <div className={style.icon}>
          <div className='fad fa-sign fa-8x'/>
        </div>

      </main>
    </div>
  )
}