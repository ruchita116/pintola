import React from 'react'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contactus = () => {
  return (

    <div className='st'>

      <img src='https://pintola.in/cdn/shop/files/Contact_us_2000x.png?v=1691834837' alt='img' />
      <br />
      <div className='say'>SAY HELLO!</div>
      <div className='co'>
        <div className='co1'>
          <ul>
            <li>Company - Das Foodtech Pvt Ltd</li>
            <li>Email - support@pintola.in</li>
            <li>Phone - 91 78080 58080‬</li>
            <li> Corporate Office - 304-305 Ganesh Glory, Jagatpur,
              SG Highway Ahmedabad- 382481</li>
            <li> Manufacturing Unit - Block No. 1234, Salal-Sonasan Road, At. Sonasan, Ta. Prantij, Dist, Himatnagar, Gujarat 383210</li>
            <li> Working Days - Monday to Saturday</li>
            <li> Timing - 9am to 6pm</li>
            <p className='folo'>Follow Us:</p>
            <i><FaTwitter /></i> 
            <i><FaFacebookF /></i> 
           <i> <FaYoutube /></i> 
             <i><FaInstagram /></i>
            <i> <FaLinkedinIn /></i>

          </ul>
        </div>
        <div className='co2'>
          <form>
            <select>
              <option> What can we help with?<sup>*</sup></option>
              <option>For dealership enquiries?</option>
              <option>For Export Enquiries?</option>
              <option>Feedback</option>
            </select>
            <br /><br />
            <input type="text" id="name" name="name" placeholder='Name*' required />
            <br /><br />
            <input type="email" id="email" name="email" required placeholder='Email*' />
            <br /><br />
            <input type="tel" id="phone" name="phone" placeholder='Phone Number*' required />
            <br /><br />
            <input type="text" id="area" name="area" placeholder='Area/City' required />
            <br /><br />
            <input type="text" id="country" name="country" placeholder='Country(for export)' />
            <br /><br />
            <textarea id="message"className='tarea' name="message" placeholder='Message*' required></textarea>
            <br /><br />
            <button type="submit" className='lbtn'>Submit</button>
          </form>
        </div>
      
       
      </div>        
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14637.039424253175!2d72.91529800000002!3d23.487148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dc66cd0000001%3A0xabd344b9cbc5a45!2sDas%20Foodtech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1719473587863!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


  )
}

export default Contactus
