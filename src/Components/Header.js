import React from 'react'
import { Link } from 'react-router-dom'


export default function Header(){
    return( 


      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="container-fluid">
      <a className="navbar-brand">Employee Handbook</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
             <li className="nav-link"><Link to="/">Home</Link></li>
            <li className="nav-item nav-link"><Link to="/Features">Features</Link>
            </li>
            <li className="nav-item"
              className="nav-link" ><Link to ="/Pricing">Pricing</Link>
            </li>
            <li className="nav-item" className="nav-link" ><Link to="/Events">Events</Link>
            </li>
            <li className="nav-item"  className="nav-link" ><Link to="/News">News</Link>
            </li>
            <li className="nav-item"
               className="nav-link" ><Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
            
        


   
    )
}
