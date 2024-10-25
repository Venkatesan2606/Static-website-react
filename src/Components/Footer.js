import React from 'react'
import { Link } from 'react-router-dom'



export default function Footer(){
  return(
    <footer className="bg-dark text-light py-2 mt-2">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>About Us</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ligula eu sem consequat accumsan.</p>
        </div>
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li className= "nav-item">
              <a className="nav-link" >Contact</a></li>
              <li className= "nav-item">
              <a className="nav-link" >About</a></li>
              <li className= "nav-item">
              <a className="nav-link" >Portfolio</a></li>
        
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  )
}