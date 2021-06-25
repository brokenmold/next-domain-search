import React from 'react'
import { useRouter } from 'next/router'
import Random from 'project-name-generator'

// import style from '../styles/comp.searchBox.module.scss'

export default function SearchBox() {
  const router = useRouter()

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

  return (
    <section className='searchWrapper'>

      <section className='search'>
        <div className='form'>

          <div className='item'>
            <input id='term' type='text' autoComplete='term' required />
          </div>

          <div className='item'>
            <button onClick={searchDomain} className='search' type='submit'>SEARCH</button>
          </div>

          <div className='item'>
            <button onClick={getRandom} className='generate' type='generate'>RANDOM</button>
          </div>

        </div>
      </section>

    </section>
  )
}