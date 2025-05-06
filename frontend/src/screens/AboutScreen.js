//importing the neccassary modules
import React from 'react'
import about from '../assets/about.png'

//a basic about screen page

const AboutScreen = () => {

    return (
        <div className="about-page">
            <div>
                <img src={about} alt="" />
            </div>
            <div className="about-text">
                <h2><strong>We can Save</strong> <span>you <br /> time and money</span></h2>
                <p>At Simple Life, we guarantee to provide you with the ultimate experience through your process of purchasing life insurance. <br /><br />
                    Our focus is to provide you with a service that saves you time and money, all while providing you with the perfect cover that is
                    best suited to you and your needs. <br /><br />
                    Our team of expert life-insurance agents looks forward to assisting you in your journey and we are always a click or call away when
                    you have any questions or need some assistance. <br /><br />
                    We look forward to welcoming you to our family!
                </p>
            </div>
        </div>
    )
}

export default AboutScreen