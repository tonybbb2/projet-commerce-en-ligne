import React from 'react'
import { Link } from 'react-router-dom'

const BigCards = ({ img, id }) => {
  console.log(`ID ${id}`)
  return (
    <Link to={`/details/${id}`}>
      <img src={img} alt="" className='rounded-xl' />
    </Link>
  )
}

export default BigCards