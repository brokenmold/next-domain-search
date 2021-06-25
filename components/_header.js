import React from 'react'
import Link from 'next/link'


export default function Header() {
  return(
    <header>
      <div className='header-container'>
        <section className='headerWrapper'>

          <section className='logo'>
            <Link href='/'>
              <a>
                <span className='title'>Domain Search</span>
              </a>
            </Link>
          </section>

          <section className='nav'>
            <a className='nav' href='https://github.com/brokenmold/nextjs-domain-search' target='blank'>
              <span className='fab fa-github fa-2xl'/>
              <span className='navText'>Get The Code</span>
            </a>
          </section>

        </section>
      </div>
    </header>
  )
}