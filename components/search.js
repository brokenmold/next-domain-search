import React from 'react'
import axios from 'axios'

import style from '../styles/comp.search.module.scss'

export default function Search() {

  const searchDomain = async event => {
    event.preventDefault()

    const searchTerm = event.target.term.value.toLowerCase().replace(/\s+/g, '')

    const reqDotDev = axios.request({
      method: 'GET',
      url: 'https://domainr.p.rapidapi.com/v2/status',
      params: {
        'mashape-key': process.env.RAPIDAPI_KEY,
        domain: `${searchTerm}.dev`
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'domainr.p.rapidapi.com'
      }
    })

    const reqDotIo = axios.request({
      method: 'GET',
      url: 'https://domainr.p.rapidapi.com/v2/status',
      params: {
        'mashape-key': process.env.RAPIDAPI_KEY,
        domain: `${searchTerm}.io`
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'domainr.p.rapidapi.com'
      }
    })

    const reqDotCom = axios.request({
      method: 'GET',
      url: 'https://domainr.p.rapidapi.com/v2/status',
      params: {
        'mashape-key': process.env.RAPIDAPI_KEY,
        domain: `${searchTerm}.com`
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'domainr.p.rapidapi.com'
      }
    })

    const reqDotNet = axios.request({
      method: 'GET',
      url: 'https://domainr.p.rapidapi.com/v2/status',
      params: {
        'mashape-key': process.env.RAPIDAPI_KEY,
        domain: `${searchTerm}.net`
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'domainr.p.rapidapi.com'
      }
    })

    const reqDotOrg = axios.request({
      method: 'GET',
      url: 'https://domainr.p.rapidapi.com/v2/status',
      params: {
        'mashape-key': process.env.RAPIDAPI_KEY,
        domain: `${searchTerm}.org`
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'domainr.p.rapidapi.com'
      }
    })

    const resDot = () => {
      // *** Define Calls ***
      axios.all([reqDotDev, reqDotIo, reqDotCom, reqDotNet, reqDotOrg])
      .then(axios.spread((...res) => {

        for (let i = 0; i < res.length; i++) {
          const resDot = res[i].data.status[0]

          document.getElementById(`output-${resDot.zone}-icon`).innerHTML = `
            ${ getIcon(resDot.summary) }
          `

          document.getElementById(`output-${resDot.zone}-domain`).innerHTML = `
              ${resDot.domain}
          `

          document.getElementById(`output-${resDot.zone}-status`).innerHTML = `
            ${ getStatus(resDot.summary, resDot.domain) }
          `
        }
      })).catch(errors => {
        console.log(errors)
      })
    }

    resDot()
  }

  // Check Domain Available
  const getStatus = (summary, domain) => {
    const url = domain
    if (summary == 'inactive')
      return `Availible!  <a href='https://domains.google.com/registrar/search?searchTerm=${domain}' target='_blank'><img src='../svg/cart-arrow-down-solid.svg' style='height: 28px;'/></a>`
    // else if (summary == 'active')
    else
      return `Already Taken`
  }

  // Get Icon
  const getIcon = (summary) => {
    if (summary == 'inactive')
      return `<img src='../svg/trophy-solid.svg' style='height: 30px;'/>`
    else
      return `<img src='../svg/car-crash-solid.svg' style='height: 30px;'/>`
  }

  return (
    <section className={style.wrapper}>

      <section className={style.search}>
        <form onSubmit={searchDomain}>

          <div className={style.item}>
            <input id='term' type='text' autoComplete='term' required />
          </div>

          <div className={style.item}>
            <button className={style.search} type='submit'>SEARCH</button>
          </div>

          <div className={style.item}>
            <button className={style.generate} type='generate'>GENERATE</button>
          </div>

        </form>
      </section>

    </section>
  )
}