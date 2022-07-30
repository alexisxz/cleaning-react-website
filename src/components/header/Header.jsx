import React from 'react'
import './header.css'
import LOGO from '../../assets/white_logo.png'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <div className="header__container-logo">
                    <img src={LOGO} alt="Shema logo" />
                </div>

                <div className="header__container-title">
                    <h1 className='text-white'>Professional</h1>
                    <h3 className='text-white'>Residential and Commercial</h3>
                    <h2 className='text-white'>Cleaning Company</h2>
                    <p className='text-white'>Competitive rates</p>
                    <p className='text-white'>Flexibe, Convenient, Appointments</p>
                    <p className='text-white'>100% Satisfaction Guaranteed</p>
                    <p className='text-white'>Industrial, Commercial and Residential</p>
                </div>
            </div>
        </header>
    )
}

export default Header