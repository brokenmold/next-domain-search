import React from 'react'
import Head from 'next/head'

import '../styles/_global.scss'

export default function App({ Component, pageProps }) {
  return (
    <div>

      <Head>
        <title>Domain Search</title>
      </Head>

      <div className='containerWrapper'>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </div>

    </div>
  )
}