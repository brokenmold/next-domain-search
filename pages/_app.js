import React from 'react'
import Head from 'next/head'

import '../styles/_global.scss'

import Header from '../components/_header'


export default function App({ Component, pageProps }) {
  return (
    <div>

      <Head>
        <title>Domain Search</title>
      </Head>

      <Header/>

      <div className='containerWrapper'>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </div>

    </div>
  )
}