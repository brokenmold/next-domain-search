import React from 'react'
import { useRouter } from 'next/router'
import Random from 'project-name-generator'

import styleSearchBox from '../styles/comp.searchBox.module.scss'
import styleSearchBar from '../styles/comp.searchBar.module.scss'

const style = styleSearchBox

export default function SearchBox() {
  const router = useRouter()

  // GET DIR
  // console.log(router.pathname.split('[')[0])
  console.log(router.locale)

  // Button > Search > onClick
  const searchDomain = async event => {
    // Prevent onClick Default
    event.preventDefault()

    // Format Search Term
    const searchTerm = term.value.toLowerCase().replace(/\s+/g, '')

    // Get Search Results
    router.push(`/domain/${searchTerm}`)
  }

  // Button > Random > onClick
  const getRandom = async event => {
    // Prevent onClick Default
    event.preventDefault()

    // Query Random Term
    const rando = Random().spaced

    // Set Input Value
    document.getElementById('term').value = `${rando}`
  }

  // Form > onSubmit
  const preventDefault = async event => {
    // Prevent onSubmit Default
    event.preventDefault()
  }

  return (
    <section className={style.wrapper}>

      <section className={style.search}>
        <form onSubmit={preventDefault}>

          <div className={style.item}>
            <input id='term' type='text' autoComplete='term' required />
          </div>

          <div className={style.item}>
            <button onClick={searchDomain} className={style.search} type='submit'>SEARCH</button>
          </div>

          <div className={style.item}>
            <button onClick={getRandom} className={style.generate} type='generate'>RANDOM</button>
          </div>

        </form>
      </section>

    </section>
  )
}