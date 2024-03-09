import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import BannerSection from './Banner'
import BannerSecond from './BannerSecond'
import AnimalSection from './AnimalSection'
import '../css/style.css'
import ServiceContainer from './Service'
import ShopContainer from './ShopContainer'
import TeamContainer from './TeamContainer'
import StatsSection from './StatsSection'
import FooterContainer from './Footer'

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/login');
  }

  return (
    <div >
      <Header />
      <BannerSection/>
      <BannerSecond/>
      <ServiceContainer/>
      <AnimalSection/>
      <ShopContainer/>
      <TeamContainer/>
      <StatsSection/>
      <FooterContainer/>

    </div>
     
    
  )
}

export default Home