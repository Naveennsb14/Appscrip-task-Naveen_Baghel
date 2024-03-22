import React from 'react'
import logo from '../public/Logo.png'
import Image from 'next/image';
import Search from '../public/search-normal.png'
import Heart from '../public/heart.png'
import Shopping from '../public/shopping-bag.png'
import Profile from '../public/profile.png'
// import Language from '../public/language.png'
import upper from '../public/element-4.png'


const Headmain = () => {
  return (
    <div>
       <div className="header_container">
      <div className="header_1">
        <div className="header_innertext">
          <Image src={upper} alt="" />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="header_innertext">
        <Image src={upper} alt="" />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="header_innertext">
        <Image src={upper} alt="" />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
      <div className="header_2">
        <div className="header_logoSection">
          <div className="logoimg">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="logoText">
            <h1>LOGO</h1>
          </div>
          <div className="logoIcons">
            <Image className='search' src={Search} alt='search'/>
            <Image className='heart' src={Heart} alt='favourites'/>
            <Image className='shopping' src={Shopping} alt='cart'/>
            <Image className='profile' src={Profile} alt='profile'/>
            {/* <Image className='language' src={Language} alt='language'/> */}

          </div>
        </div>
        <div className="header_navSection">
            <div className="header_navigation">
                <span>SHOP</span>
                <span>SKILLS</span>
                <span>STORIES</span>
                <span>ABOUT</span>
                <span>CONTACT US</span>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Headmain
