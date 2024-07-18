import React from 'react'
import './Style.css'; 
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
  
    <div class="foo"></div>
    <div class="footer">
      <div class="f1">
        <img
          src="https://pintola.in/cdn/shop/files/Pintola_Logo_PNG_e0a75445-bd35-450f-895e-ece13c165b78_200x.png?v=1668503333"/>
        <p>Follow Us:</p>
       <i><FaTwitter /></i> 
       <i><FaFacebookF /></i> 
      <i> <FaYoutube /></i> 
        <i><FaInstagram /></i>
       <i> <FaLinkedinIn /></i>
      </div>
      <div class="f2">
        <div className='f22'>shop</div>
        <a href="#">All Products</a> <br/>
        <a href="#"> Peanut Butter</a><br/>
        <a href="#">Breakfast Cereals</a><br/>
        <a href=""> Premium Nut Butters</a><br/>
        <a href=""> Wholegrain Rice Cakes</a><br/>
        <a href=""> Wood Pressed Oil</a><br/>
      </div>
      <div class="f2">
        <div className='f23'>Pintola</div>
        <a href="#">About Us</a> <br/>
        <a href="#">Blogs </a><br/>
        <a href="#">Privacy Policy</a><br/>
        <a href=""> Terms of Service</a><br/>
        <a href=""> FAQs</a><br/>
        <a href="">Refund & Cancellation Policy </a><br/>
        <a href="">Shipping Policy </a><br/>
        <a href=""> Return Order</a><br/>
      </div>
      <div class="f2">
      <h6>Stay in the loop</h6>
      <input type="email" placeholder="Email" class="email"/>
      <br/><br/> <button class="bt">Sign Up </button>
    </div>

    <div class="f2">
      <h6> Download Product Catalogue</h6>
      <button className='bt1'>Download</button>

    </div>
    </div>

  <div class="last">
    © 2024 Pintola.

  </div>
      
    </div>
  )
}

export default Footer
