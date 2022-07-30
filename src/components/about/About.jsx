import React from 'react'
import './about.css'
import { GiFloorPolisher } from 'react-icons/gi'
import { MdCleaningServices } from 'react-icons/md'
import { FaIndustry } from 'react-icons/fa'
import { MdOutlineWindow } from 'react-icons/md'
import IMG1 from '../../assets/cleanner_2.jpg'
import CTA from './CTA'

const About = () => {
    return (
        <section id='about'>
            <div className="container about__container">
                <div className="about__container-services">
                    <article className="service">
                        <h3>Floorwork</h3>
                        <h5>wax, wood, stone</h5>
                        <GiFloorPolisher className='service-icon' />
                    </article>

                    <article className="service">
                        <h3>Housekeeping</h3>
                        <h5>for your home</h5>
                        <MdCleaningServices className='service-icon' />
                    </article>

                    <article className="service">
                        <h3>Facility Cleaning</h3>
                        <h5>for your company</h5>
                        <FaIndustry className='service-icon' />
                    </article>

                    <article className="service">
                        <h3>Window</h3>
                        <h5>window cleaning</h5>
                        <MdOutlineWindow className='service-icon' />
                    </article>
                </div>
                {/* END OF SERVICES */}
                <div className="about__container-us">
                    <img src={IMG1} alt="cleanner 2 shema" className='cleanner2' />
                    <div className="hire-us">
                        <div className="text">
                            <h2>Why hire us?</h2>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa sed tenetur recusandae. Hic nemo rerum officiis similique, excepturi odio aut maiores laudantium iure numquam ab nisi exercitationem quis labore.</small>
                        </div>
                        <CTA />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About