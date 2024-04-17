import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
//import styles
import style from "./a.module.scss";
//import components
import Navbar from '../../components/Navbar/Navbar'
import GradientText from '../../components/GradientText/GradientText';
import SearchFields from '../../components/SearchFields/SearchFields';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import Footer from '../../components/Footer/Footer'
import Card from './components/Card';
//import assets
import studyGroupHeroBackground from "../../assets/Backgrounds/studygroup-grid-background.svg";
import axios from 'axios';
import communityIcon from "../../assets/icons/community-white.svg"


const StudyGroups = () => {
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchGroups() {
            try {
                const response = await axios.get('http://localhost:4000/api/allrooms/');
                const data = response.data;
                setCardsData([...data])
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        fetchGroups()
    }, [])

    const [cardsData, setCardsData] = useState(null)


    const HeroSection = () => {
        return (
            <div className={style.heroSection} style={{ backgroundImage: `url(${studyGroupHeroBackground})` }}>
                <h1>Find a correct <br /> place for <GradientText title="Yourself" color1='#407BFF' color2='#F32053' /></h1>
                <div className={style.searchPanel}>
                    <SearchFields />
                    <PrimaryButton title="Search" />
                </div>
            </div>
        )
    }

    const handleNavigation = (roomName) => {
        const userData = JSON.parse(localStorage.getItem('user'));

        // Check if userData and user.rooms exist
        if (userData && userData.data.user.rooms.includes(roomName)) {
            // Check if the roomName exists in user.rooms array
            navigate('/chat')
        }
        else {
            navigate('/groupInfo')
        }
    }

    const SearchResults = () => {
        return (
            // <div className={style.searchResults} >
            <>
                {cardsData && cardsData.map((data) => {
                    return (
                        <div key={data._id} className={style.card} onClick={() => handleNavigation(data._id)}>
                            <div className={style.details}>
                                <h1>{data.name}</h1>
                                <p>{data.description}</p>
                            </div>
                            <div className={style.info}>
                                <h1>{data.mentor}</h1>
                                <div>
                                    <img src={communityIcon} alt="icon"></img>
                                    <h2>{50}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
            // </div>
        )
    }

    return (
        <div>
            <Navbar />
            <div className="AppNavbarGap"></div>
            <HeroSection />
            <SearchResults />
        </div>
    )
}

export default StudyGroups
