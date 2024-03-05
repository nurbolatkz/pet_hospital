import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import '../css/style.css'

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/login');
  }

  return (
    <div> <Header /></div>
    
  )
}

export default Home