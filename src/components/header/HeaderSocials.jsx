import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/riadh-bellazreg-6449401a3/' target="_blank"> <BsLinkedin/> </a>
        <a href='https://github.com/riadh-belazreg' target="_blank"> <FaGithub/> </a>
        <a href='https://www.facebook.com/riadh.bellazreg' target="_blank"> <FaFacebookSquare/> </a>
    </div>
  )
}

export default HeaderSocials