import Head from 'next/head'
import axios from 'axios'

import style from '../styles/home.module.scss'

export default function Home() {

  const searchDomain = async event => {
    event.preventDefault()

    const reqDotDev = axios.request({
      method: 'GET',
      url: 'https://domainr.p.rapidapi.com/v2/status',
      params: {
        'mashape-key': process.env.RAPIDAPI_KEY,
        domain: `${event.target.term.value}.dev`
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'domainr.p.rapidapi.com'
      }
    })

    const resDot = () => {
      // *** Define Calls ***
      axios.all([reqDotDev])
      .then(axios.spread((...res) => {

        for (let i = 0; i < res.length; i++) {
          const resDot = res[i].data.status[0]

          console.log('Domain Res: ' + resDot.domain)

          // document.getElementById(`output-${resDot.zone}`).innerHTML = `
          //   ${resDot.domain} ${ isAvailable(resDot.summary) } <br />
          // `
        }
      })).catch(errors => {
        console.log(errors)
      })
    }

    resDot()
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