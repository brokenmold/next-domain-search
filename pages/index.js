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
          <div className={style.icon}>
            <div className='fad fa-sign fa-8x'/>
          </div>
          <h1>Digital Real Estate</h1>
          <h4>Let’s check out your domain options.</h4>

        </section>

        {/* SEARCH BOX */}
        <section className={style.searchBox}>
          <Search/>
        </section>

        {/* RESULTS */}
        <section className={style.result}>

          <div className={style.item} id='output-dev'>
            <div className={style.icon} id='output-dev-icon'></div>
            <div className={style.status} id='output-dev-status'></div>
          </div>

          <div className={style.item} id='output-io'>
            <div className={style.icon} id='output-io-icon'></div>
            <div className={style.status} id='output-io-status'></div>
          </div>

          <div className={style.item} id='output-com'>
            <div className={style.icon} id='output-com-icon'></div>
            <div className={style.status} id='output-com-status'></div>
          </div>

          <div className={style.item} id='output-net'>
            <div className={style.icon} id='output-net-icon'></div>
            <div className={style.status} id='output-net-status'></div>
          </div>

          <div className={style.item} id='output-org'>
            <div className={style.icon} id='output-org-icon'></div>
            <div className={style.status} id='output-org-status'></div>
          </div>

        </section>

        {/* AFFILIATE TAG */}
        {/* <div className={style.digitalOcean}>
          <a href='https://m.do.co/c/cb06502b2c00' target='_blank'><span class='fab fa-digital-ocean fa-2x'/> Powered by DigitalOcean</a>
        </div> */}

      </section>
    </div>
  )
}