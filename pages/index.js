import Head from 'next/head'
import Search from '../components/search'

export default function Home() {
  return (
    <div>
      <Head></Head>

      <section className='homeWrapper'>

        <section className='heroBox'>
          <div className='icon'>
            <div className='fas fa-sign fa-8x'/>
          </div>
          <h1>Digital Real Estate</h1>
          <h4>Let’s check out your domain options.</h4>

        </section>

        <section className='searchComponent'>
          <Search/>
        </section>

        {/* <div className={style.digitalOcean}>
          <a href='https://m.do.co/c/cb06502b2c00' target='_blank'><span class='fab fa-digital-ocean fa-2x'/> Powered by DigitalOcean</a>
        </div> */}

      </section>
    </div>
  )
}