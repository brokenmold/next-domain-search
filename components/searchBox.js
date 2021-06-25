import React from 'react'
import { useSearch } from './searchContext'
import { useRouter } from 'next/router'
import Random from 'project-name-generator'

import styleSearchBox from '../styles/comp.searchBox.module.scss'
import styleSearchBar from '../styles/comp.searchBar.module.scss'

const style = styleSearchBox

// console.log(searchStyle)

export default function SearchBox() {
  const search = useSearch()
  const router = useRouter()

  // console.log(router.locale)

  // onClick -- Search
  const searchDomain = async event => {
    event.preventDefault()

    // if searchTerm !null
    const searchTerm = term.value.toLowerCase().replace(/\s+/g, '')
    router.push(`/domain/${searchTerm}`)
  }

  // onClick -- Random
  const getRandom = async event => {
    event.preventDefault()
    const rando = Random().spaced
    document.getElementById('term').value = `${rando}`
  }

  const preventDefault = async event => {
    event.preventDefault()
  }

  return (
    <section className={style.wrapper}>

      <section className={style.search}>
        <div className={style.form}>

          {search}

          <div className={style.item}>
            <input id='term' type='text' autoComplete='term' required />
          </div>

          <div className={style.item}>
            <button onClick={searchDomain} className={style.search} type='submit'>SEARCH</button>
          </div>

          <div className={style.item}>
            <button onClick={getRandom} className={style.generate} type='generate'>RANDOM</button>
          </div>

        </div>
      </section>

    </section>
  )
}