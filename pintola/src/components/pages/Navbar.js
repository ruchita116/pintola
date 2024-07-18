import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser, faMagnifyingGlass, faCartShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <div class="head111">
        <i class="fa-solid fa-bag-shopping new"></i>
        Use FIRST15 & Get FLAT 15% OFF on Your First Order!
      </div>
      <navbar>
        <div class="nav">
          <img class="logo" src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_400x.png?v=1655118347" />
          <ul>
            <li><Link to="/"><a href="#">store</a></Link></li>
            <li> <Link to="Why"><a href="Why">why pintola?</a></Link></li>
            <li> <Link to="Recipes"><a href="Recipes">Recipes</a> </Link></li>
            <li><Link to="Aboutus"><a href="Aboutus"> About us</a> </Link></li>
            <li> <Link to="Contactus"><a href="Contactus">Contact us </a></Link></li>
            <li class="track"><Link to="#"><a href="#">
              <div class="t1">Track Your Order</div>
            </a></Link>
            </li>
            <div class="icons">
            <li><Link to="Userlogin"><FontAwesomeIcon icon={faUser} className='i' /></Link></li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} className='i' /></li>
            <li><Link to="Cart"><FontAwesomeIcon icon={faCartShopping} className='i' /></Link></li>
           <li><Link to="Contactus"><FontAwesomeIcon icon={faEnvelope} className='i' /></Link></li> 
            </div>
          </ul>
        </div>
      </navbar>
    </div>
  )
}

export default Navbar
