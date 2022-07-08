import React from 'react';
import "../style/Home.css";
import Topnav from '../style/topnav'
import Middle from '../style/Middle'


const Home = () => {
  return (
    <>
    <Topnav />
    <div className='middle'>
    <Middle/>
    </div>
    </>
  )
}
export default Home