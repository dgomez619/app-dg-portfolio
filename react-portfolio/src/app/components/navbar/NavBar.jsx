import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'

function NavBar() {
  
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='navBar'>
        <a onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href="#"><AiOutlineHome/></a>
        <a onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} href="#about"><AiOutlineUser/></a>
        <a onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} href="#portfolio"><BiBook/></a>
        <a onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default NavBar