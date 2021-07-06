import React from 'react'
//import icons
import clock from '../img/clock.svg'
import money from '../img/money.svg'
import diaphragm from '../img/diaphragm.svg'
import teamwork from '../img/teamwork.svg'

import home2 from '../img/home2.png'


const ServiceSection = () => {
    return (
        <div>
            <div className="services">
                <div className="description">

                    <h2>High <span>Quality</span> services</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={clock} alt="clock logo" />
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={teamwork} alt="team logo" />
                                <h3>Teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={diaphragm} alt="dia logo" />
                                <h3>Diaphragm</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={money} alt="money logo" />
                                <h3>Affordable</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image">
                <img src={home2} alt="" />
            </div>
        </div>
    )
}

export default ServiceSection
