// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import './Castillo.scss'

export default function Castillo() {
  return (
    <>
      <div className='cast'>
        <span className="material-symbols-outlined fort">
        <Link to="/">fort</Link> 
        </span>
      </div>
    </>
  )
}
