import React, { PropTypes } from 'react'
import {container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}> {'Style Tracker'}</p>
      <p className = {slogan}> {'Know what you love. Remember what you love.'}</p>
    </div>
  )
}