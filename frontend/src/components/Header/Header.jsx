import React from 'react'
import './Header.scss'
import { FaHeadset } from "react-icons/fa"
import { IoLogoBuffer } from "react-icons/io"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='custom__header'>
            <div className="container">
                <div className="custom__header__top row">
                    <div className="col-5">
                        <div className="custom__header__top__logo">
                            <IoLogoBuffer /> <p>Server</p>
                        </div>
                    </div>
                    <div className="col-7">
                        <ul className='custom__header__top__links'>
                            <li className='custom__header__top__links__item'>
                                <div>
                                    <FaHeadset style={{ fontSize: "30px" }} />
                                </div>
                                <div>
                                    <span>24/7 SUPPORT</span>
                                    <p>055-555-55-55</p>
                                </div>
                            </li>
                            <li className='custom__header__top__links__item'>
                                <div>
                                    <FaHeadset style={{ fontSize: "30px" }} />
                                </div>
                                <div>
                                    <span>24/7 SUPPORT</span>
                                    <p>055-555-55-55</p>
                                </div>
                            </li>
                            <li className='custom__header__top__links__item'>
                                <div>
                                    <FaHeadset style={{ fontSize: "30px" }} />
                                </div>
                                <div>
                                    <span>24/7 SUPPORT</span>
                                    <p>055-555-55-55</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className="custom__header__bottom ">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/add'>Add</Link>
                                </li>
                                <li>
                                    <Link to='/wishlist'>Wishlist</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <div className="btns">
                                <button className='register'>Register</button>
                                <button className='login'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header