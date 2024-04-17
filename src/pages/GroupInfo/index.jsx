import React from 'react'
import { useNavigate } from 'react-router-dom'
//import styles
import style from './a.module.scss'
//import components
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
//import assets
import createdBy from '../../assets/icons/createdby.svg'
import communityIcon from "../../assets/icons/community-white.svg"
import calender from "../../assets/icons/calender.svg"
import linkedinIcon from "../../assets/icons/linkedinIcon.svg"
import twitterIcon from "../../assets/icons/twitterIcon.svg"


const GroupInfo = () => {

    const navigate = useNavigate();

    const AboutGroup = () => {
        return (
            <div className={style.mentorinfo}>
                <div className={style.aboutinfo}>
                    <div onClick={() => navigate(-1)}>
                        <SecondaryButton title='Back to groups' />
                    </div>
                    <div className={style.aboutmentor}>
                        <img src={createdBy} alt="" />
                        <div>
                            <h3>Aryan Jangid</h3>
                            <p>Created by</p>
                        </div>
                    </div>
                    <div className={style.aboutmentor}>
                        <img src={communityIcon} alt="" />
                        <div>
                            <h3>55</h3>
                            <p>Number of mentees</p>
                        </div>
                    </div>
                    <div className={style.aboutmentor}>
                        <img src={calender} alt="" />
                        <div>
                            <h3>December 18,2022</h3>
                            <p>Created on</p>
                        </div>
                    </div>
                    <div className={style.mentorSocialIcon}>
                        <img src={linkedinIcon} alt="" />
                        <img src={twitterIcon} alt="" />
                    </div>
                    <PrimaryButton title='Send request' />
                </div>
                <div className={style.groupDesc}>
                    <div className={style.description}>
                        <h2>Data Structure and Algorithms</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br />tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero<br /> eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea <br />takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur <br />sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna <br />aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.<br />Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Stet <br />clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum<br /> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore<br /> et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores<br /> et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        <h4>What will you learn here</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br /> tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero <br />eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea <br />takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur<br /> sadipscing elitr, </p>
                        <div className={style.joinSection}>
                            <p>Join us now to become the part of our family</p>
                            <div className={style.joinSectionBtn}>
                                <PrimaryButton title='Send request' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const AboutGroupInfo = () => {
        return (
            <div></div>
        )
    }

    return (
        <div>
            <AboutGroup />
            <AboutGroupInfo />
            <Navbar />
            <Footer />
        </div>
    )
}

export default GroupInfo