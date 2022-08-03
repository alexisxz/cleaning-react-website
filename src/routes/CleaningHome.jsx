import React from 'react'
import Nav from '../components/nav/Nav'
import Header from '../components/headerCleaning/Header'
import About from '../components/aboutCleaning/About'
import Contact from '../components/contactCleaning/Contact'
import Footer from '../components/footerCleaning/Footer'
import Jobs from '../components/jobsCleaning/Jobs'

const CleaningHome = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Contact />
            <Jobs />
            <Footer />
        </>
    )
}

export default CleaningHome