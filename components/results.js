import React from 'react'
import style from '../styles/comp.results.module.scss'

export default function Results() {

  return (
    <section className={style.wrapper}>

      <section className={style.search}>
        <form onSubmit={searchDomain}>
          <input id='term' type='text' autoComplete='term' required />
          <button type='submit'>Search</button>
          <button type='generate'>Generate</button>
        </form>
      </section>

    </section>
  )
}