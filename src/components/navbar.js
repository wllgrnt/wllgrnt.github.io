import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './scroll'
import './navbar.css'

const Navbar = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['ontheday', 'thedayafter', 'gettinghere', 'about', "registry", "rsvp"] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="ontheday">
                    <a href="#">On the day</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="thedayafter">
                    <a href="#">The day after</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="gettinghere">
                    <a href="#">Getting here</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="about">
                    <a href="#">About us</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="registry">
                    <a href="#">Registry</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="rsvp">
                    <a href="#">RSVP</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Navbar
