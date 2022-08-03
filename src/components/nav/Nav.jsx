/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineForm } from 'react-icons/ai'
import { MdBusinessCenter } from 'react-icons/md'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineForm /></a>
            <a href="#jobs" onClick={() => setActiveNav('#jobs')} className={activeNav === '#jobs' ? 'active' : ''}><MdBusinessCenter /></a>
            <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><AiOutlineMail /></a>
        </nav>
    )
}

export default Nav