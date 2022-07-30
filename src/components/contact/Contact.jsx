import React, { useRef } from 'react'
import './contact.css'
import IMG1 from '../../assets/cleanner_1.jpg'
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o25q13y', 'template_tlqvmh4', form.current, 'YAh56fe4Xl_688uFS')
            .then((result) => {
                e.target.reset()
                alert('Email sent, we will contact you soon!')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">
            <h2 className='container text contact-title'>Contact form</h2>
            <div className="container contact__container">
                <form ref={form} onSubmit={sendEmail}>
                    <select name="services" placeholder='Select the service' required>
                        <option value="floorwork">Floorwork</option>
                        <option value="housekeeping">Housekeeping</option>
                        <option value="facility" selected>Facility Cleaning</option>
                        <option value="window">Window</option>
                    </select>
                    <input type="text" name="name" placeholder='Your Full Name (required)' required />
                    <input type="email" name="email" placeholder='Your Email (required)' required />
                    <input type="tel" name="phone" placeholder='Your Whatsapp' />
                    <select name="language" placeholder='Attendace language desired (required)' required>
                        <option value="albanian">Shqip</option>
                        <option value="german" selected>Deutsch</option>
                        <option value="english">English</option>
                        <option value="portuguese">Português</option>
                    </select>
                    <input type="number" name="area" placeholder='The cleaning are in m² or the windows quantity' />
                    <input type="date" name="date" placeholder='Cleaning date' />
                    <textarea name="message" rows="7" placeholder='Type here your message'></textarea>
                    <button type="submit" className='btn'>Send Message</button>
                </form>
                <img src={IMG1} alt="cleanner shema" className='cleanner1' />
            </div>
        </section>
    )
}

export default Contact