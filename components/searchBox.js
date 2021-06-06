import React from 'react'
import { useRouter } from 'next/router'

import style from '../styles/comp.search.module.scss'

export default function SearchBox() {
  const router = useRouter()

  const searchDomain = async event => {
    event.preventDefault()

    const searchTerm = event.target.term.value.toLowerCase().replace(/\s+/g, '')

    router.push(`/domain/${searchTerm}`)
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