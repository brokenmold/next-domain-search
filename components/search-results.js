import React from 'react'
import axios from 'axios'

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

    const resDot = () => {
      // *** Define Calls ***
      axios.all([reqDotDev])
      .then(axios.spread((...res) => {

        for (let i = 0; i < res.length; i++) {
          const resDot = res[i].data.status[0]

          document.getElementById(`output-${resDot.zone}`).innerHTML = `
            ${resDot.domain} ${ isAvailable(resDot.summary) } <br />
          `
        }
      })).catch(errors => {
        console.log(errors)
      })
    }

    resDot()
  }

  // Check Domain Available
  const isAvailable = (summary) => {
    if (summary == 'inactive')
      return '<span className="far fa-check"/> is availible!'
    // else if (summary == 'active')
    else
      return '<i className"far fa-times"/> already taken'
  }

  return (
    <div>
      <form onSubmit={searchDomain}>
        <input id='term' type='text' autoComplete='term' required />
        <button type='submit'>Search</button>
      </form>

      <div>
        <div id='output-dev'></div>
      </div>
    </div>
  )
}