import Head from 'next/head'

import style from '../styles/home.module.scss'

export default function Home() {

  const searchDomain = async event => {
    event.preventDefault()

    // const res = await fetch(
    //   'https://hooks.zapier.com/hooks/catch/123456/abcde',
    //   {
    //     body: JSON.stringify({
    //       name: event.target.name.value
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST'
    //   }
    // )

    // const result = await res.json()
    // result.user => 'Ada Lovelace'

    console.log(event.target.term.value)

  }

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

        <form onSubmit={searchDomain}>
          <input id='term' type='text' autoComplete='term' required />
          <button type='submit'>Search</button>
        </form>

      </main>
    </div>
  )
}