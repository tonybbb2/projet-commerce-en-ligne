import React from 'react'
import { Link } from 'react-router-dom'

const BigCards = ({ img, id, color }) => {

  return (
    <Link to={`/details/${id}?color=${color}`}>
      <img src={img} alt={id} className='rounded-xl' />
    </Link>
  )
}

export default BigCards