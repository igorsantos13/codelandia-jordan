"use client"
import React from 'react'
import Image from 'next/image'
import jordanMain from '../../../assets/jordanMain.jpeg'
import { useTypingEffect } from '@/logic/useTypingEffect'

import './style.css'

function Main() {
  const text = useTypingEffect('O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.', 50);

  return (
    <main>
      <Image src={jordanMain} alt='Jordan'/>
      <div className='text'>
        <h2>A melhor loja de Jordan</h2>
        <p>{text}</p>


      </div>
        
    </main>
  )
}

export default Main