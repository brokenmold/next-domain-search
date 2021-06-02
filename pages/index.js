import Head from 'next/head'
// import SearchModule from '../components/results'
import Search from '../components/search'

import style from '../styles/page.index.module.scss'

export default function Home() {
  return (
    <div>
      <Head></Head>

      <section className={style.wrapper}>

        {/* HERO BOX */}
        <section className={style.heroBox}>
          <h1>Domain Search</h1>

          <h4>
            Find your piece of digital real estate..
          </h4>

          <div className={style.icon}>
            <div className='fad fa-sign fa-8x'/>
          </div>
        </section>

        {/* SEARCH BOX */}
        <section className={style.searchBox}>
          <Search/>
        </section>

        {/* RESULTS */}
        <section className={style.result}>
          <div className={style.item} id='output-dev'></div>
        </section>

        {/* AFFILIATE TAG */}
        <div className={style.digitalOcean}>
          <a href='https://m.do.co/c/cb06502b2c00' target='_blank'><span class='fab fa-digital-ocean fa-2x'/> Powered by DigitalOcean</a>
        </div>

      </section>
    </div>
  )
}