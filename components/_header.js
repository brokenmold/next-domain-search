import React from 'react'
import Link from 'next/link'

import style from '../styles/layout.header.module.scss'

export default function Header() {
  return(
    <header>
      <div className='header-container'>
        <div className={style.wrapper}>

          <div className={style.logo}>
            <Link href='/'>
              <a>
                <span className={style.title}>Domain Search</span>
              </a>
            </Link>
          </div>

          <div className={style.nav}>
            <a className={style.nav} href='https://github.com/brokenmold/nextjs-domain-search' target='blank'>
              <span className='fab fa-github fa-2xl'/>Get The Code
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}