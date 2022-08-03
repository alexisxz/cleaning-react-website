import React from 'react'
import './jobs.css'
import IMG1 from '../../assets/cleanner_3.jpg'

const Jobs = () => {
    return (
        <section id='jobs'>
            <h2 className='text jobs-title'>Jobs form</h2>
            <div className="container jobs__container">
                <img src={IMG1} alt="cleanner shema" className='cleanner3' />
                <form action="">
                    <input type="text" name="name" placeholder='Your Full Name (required)' required />
                    <input type="email" name="email" placeholder='Your Email (required)' required />
                    <input type="tel" name="phone" placeholder='Your whatsapp number' />
                    <textarea name="message" rows="7" placeholder='Type here your message'></textarea>
                    <span>Attach bellow your CV</span>
                    <input type="file" name="cv" placeholder='Attache here your CV' />
                    <button type="submit" className='btn'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Jobs