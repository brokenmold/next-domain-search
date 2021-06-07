import React from 'react'
import { useRouter } from 'next/router'
import Random from 'project-name-generator'

import style from '../styles/comp.search.module.scss'

export default function SearchBox() {
  const router = useRouter()

  const searchDomain = async event => {
    // Prevent onClick Default
    event.preventDefault()

    // Format Search Term
    const searchTerm = term.value.toLowerCase().replace(/\s+/g, '')

    // Get Search Results
    router.push(`/domain/${searchTerm}`)
  }

  const getRandom = async event => {
    // Prevent onClick Default
    event.preventDefault()

    // Query Random Term
    const rando = Random().spaced

    // Set Input Value
    document.getElementById('term').value = `${rando}`
  }

  const preventDefault = async event => {
    // Prevent onSubmit Default
    event.preventDefault()
  }

  return (
    <section className={style.wrapper}>

      <section className={style.search}>
        {/* <form onSubmit={searchDomain}> */}
        <form onSubmit={preventDefault}>

          <div className={style.item}>
            <input id='term' type='text' autoComplete='term' required />
          </div>

          <div className={style.item}>
            <button onClick={searchDomain} className={style.search} type='submit'>SEARCH</button>
          </div>

          <div className={style.item}>
            <button onClick={getRandom} className={style.generate} type='generate'>GENERATE</button>
          </div>

        </form>
      </section>

    </section>
  )
}