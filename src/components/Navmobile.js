/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import './navmobile.css';
import mobileLogo from '../assets/images/logo1.png'
function Namable() {
    const [navMobile, setNavMobile] = useState(true)
    return (
        <div className="wrapper-mobile">
            <div className="nav-mobile-header">
                <div className="nav-mobile-icon"><img src={mobileLogo} alt='mobile-logo' className="nav-mobile-logo" /></div>
                <button className="navmobile-div-btn"><div className="mobile-arrow-right"><FontAwesomeIcon icon={faArrowRight} /></div>Dashboard</button>
                <div className="nav-mobile-close"><FontAwesomeIcon icon={faXmark} /></div>
            </div>

            <div className="nav-mobile">

                <div className="item1">
                    <a className="item-link1">Partner</a>
                </div>
                <div className="item2">
                    <a className="item-link2">Ecosystem</a>
                </div>
                <div className="item3">
                    <a className="item-link3">About</a>
                </div>
                <div className="item4">
                    <a className="item-link4">Road map</a>
                </div>
                <div className="item5">
                    <a className="item-link5">Whitepaper</a>
                </div>
                <div className="item6">
                    <a className="item-link6">News</a>
                </div>
                <div className="item7">
                    <a className="item-link7">Connect</a>
                </div>

            </div>
        </div>
    );
}

export default Namable;