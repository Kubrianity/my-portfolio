import React from 'react';
import {HiOutlineArrowSmDown} from "react-icons/hi";

const Scroll = () => {
  return (
    <div className="home__scroll">
      <a href="#skills" className="home__scroll-button button--flex">
        <span className="home__scroll-name">Scroll Down</span>
        <HiOutlineArrowSmDown className="home__scroll-arrow"/>
      </a>
    </div>
  )
}

export default Scroll;