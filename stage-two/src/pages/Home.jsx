import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Main/>
    <Row title='Featured Movie' fetchURL={requests.requestTrending} />

    <Footer/>
    </>
  )
}

export default Home