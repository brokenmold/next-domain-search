import Head from 'next/head'
import SearchBox from '../components/searchBox'

import style from '../styles/page.index.module.scss'

const searchStyle = 'search-box'

export default function Home() {
  return (
    <div>
      <Head></Head>

      <section className={style.wrapper}>

        {/* HERO BOX */}
        <section className={style.heroBox}>
          <div className={style.icon}>
            <div className='fas fa-sign fa-8x'/>
          </div>
          <h1>Digital Real Estate</h1>
          <h4>Let’s check out your domain options.</h4>

        </section>

        {/* SEARCH BOX */}
        <section className={style.searchBox}>
          <SearchBox/>
        </section>

        {/* AFFILIATE TAG */}
        {/* <div className={style.digitalOcean}>
          <a href='https://m.do.co/c/cb06502b2c00' target='_blank'><span class='fab fa-digital-ocean fa-2x'/> Powered by DigitalOcean</a>
        </div> */}

      </section>
    </div>
  )
}