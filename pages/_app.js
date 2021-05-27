import React from 'react'
import Head from 'next/head'

import '../styles/_global.scss'

export default function App({ Component, pageProps }) {
  <Head>
    <title>Domain Search</title>
  </Head>

  return (
    <Component {...pageProps} />
  )
}