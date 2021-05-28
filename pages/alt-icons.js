import Head from 'next/head'

import style from '../styles/home.module.scss'

export default function Home() {
  return (
    <div>
      <Head></Head>
      <main>

        <h1>Alt Icons</h1>

        <div className={style.icon_sm}>
          <div className='fa fa-sign fa-8x'/>
          <div className='fad fa-sign fa-8x'/>
          <div className='far fa-laptop-house fa-8x'/>
          <div className='fal fa-laptop-house fa-8x'/>
          <div className='fad fa-laptop-house fa-8x'/>
          <div className='fad fa-thumbtack fa-8x'/>
          <div className='fad fa-copyright fa-8x'/>
          <div className='fad fa-stream fa-8x'/>
          <div className='fad fa-industry-alt fa-8x'/>
          <div className='fad fa-mind-share fa-8x'/>
          <div className='fad fa-lamp-shade fa-8x'/>
          <div className='fad fa-coffee-pot fa-8x'/>
          <div className='fad fa-industry fa-8x'/>
          <div className='fad fa-analytics fa-8x'/>
        </div>

      </main>
    </div>
  )
}