import React from 'react'
import Link from 'next/link'

import style from '../styles/layout.header.module.scss'

export default function Header() {
  return(
    <header>
      <div className='header-container'>
        <div>
          <span className={style.title}>Domain Search</span>
        </div>
      </div>
    </header>
  )
}