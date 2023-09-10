import React from 'react'
import Image from 'next/image'
import './style.css'


function Card(props) {
  return (
    <div className='card-container'>
        <Image src={props.jordan} alt='jordan'/>
    </div>
  )
}

export default Card