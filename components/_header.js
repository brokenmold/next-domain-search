import React from 'react'
import Link from 'next/link'

import styles from '../styles/layout.header.module.scss'

export default function Header() {
  return(
    <header>
      <div className='header-container'>
        <div>
          <h1>Domain Search</h1>
        </div>
      </div>
    </header>
  )
}