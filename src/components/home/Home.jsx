import React from 'react'
import './home.css'
import LOGO from '../../assets/white_logo.png'

const Home = () => {
    return (
        <div id='Home'>
            <div className="home__container-logo">
                <a href='/'><img src={LOGO} alt="Shema logo" /></a>
            </div>
            <div className="home__container">
                <div className="cleaning">
                    <div className="cleaning-btn">
                        <a href="/cleaning"><button className="btn">Cleaning</button></a>
                    </div>
                </div>

                <div className="logistic">
                    <div className="logistic-btn">
                        <a href="/logistic"><button className="btn">Logistic</button></a>
                    </div>
                </div>
            </div>
            <div className="home__copyright">
                <small>&copy; Shema GBmH. All rights reserved.</small>
            </div>
        </div>
    )
}

export default Home