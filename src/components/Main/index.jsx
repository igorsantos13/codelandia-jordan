import React from 'react'
import Image from 'next/image'
import jordanMain from '../../../assets/jordanMain.jpeg'

import './style.css'

function Main() {
  return (
    <main>
      <Image src={jordanMain} alt='Jordan'/>
      <div className='text'>
        <h2>A melhor loja de Jordan</h2>
        <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>

      </div>
        
    </main>
  )
}

export default Main