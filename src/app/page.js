import Destaques from "@/components/Destaques"
import Header from "@/components/Header"
import Main from '@/components/Main'
import j1 from '../../assets/J1.png'
import j2 from '../../assets/J2.png'
import j3 from '../../assets/J3.png'
import j4 from '../../assets/J4.png'
import j5 from '../../assets/J5.png'
import j6 from '../../assets/J6.png'
import j7 from '../../assets/J7.png'
import j8 from '../../assets/J8.png'

import Card from "@/components/Card"

import './style.css'

export default function Home() {
  return (
    <>
    <Header />
    <Main />
    <Destaques />

    <div className="container-card">
      <Card jordan={j1}/>
      <Card jordan={j2}/>
      <Card jordan={j3}/>
      <Card jordan={j4}/>
      <Card jordan={j5}/>
      <Card jordan={j6}/>
      <Card jordan={j7}/>
      <Card jordan={j8}/>
    </div>
    </>
  )
}
