import React from "react";
import footerLinks from "../data/footerLinks.js";
import contacts from "../data/contacts.js";
import stemClubLogo from '../images/stem-club-logo.png'
import './Footer.scss'

const Column = ({ title, links }) => {
  return (
    <div className='col-4 d-flex flex-column'>
      <h5 className="fw-bold text-white"> { title } </h5>
      {
        links.map((link, index) => {
          return <a className='text-white text-break text-decoration-none' href={ link.url } key={index}> { link.text } </a>
        })
      }
    </div>
  )
}

const Contacts = () => {
  return <div className='col-12 col-md-9 text-break'>
    {/* {
      contacts.map(contact => (
        <a href={contact.url} className="text-white mx-1" >
          <i className={contact.iconClass} />
        </a>
      ))
    } */}
    <h5 className="fw-bold text-white">Fulbright STEM Club</h5>
    <p>
    Floor 2, Crescent Plaza, 105 Ton Dat Tien, 
    <br />
    Tan Phu Ward, District 7, Ho Chi Minh City
    </p>
    <p>
    <i className="bi bi-envelope me-2"></i>
    <a className="text-white text-decoration-none" href="mailto:stem.club@student.fulbright.edu.vn">
      stem.club@student.fulbright.edu.vn
    </a>
    
    <br />
    <i className="bi bi-facebook me-2"></i>
    <a className="text-white text-decoration-none" href="https://fb.com/fulbrightstemclub">
      fb.com/fulbrightstemclub
    </a>
    
    </p>

  </div>
}

const Footer = () => {
  return (
    <div className='bg-primary py-5 container-fluid text-white mt-4'>
      <div className="container">
        <div className="row">
          <div className="row col-12 col-md-7">
            <div className="d-flex flex-column align-items-start col-3 d-none d-md-block">
              <img src={ stemClubLogo } alt="STEM Club logo" className='footer-avatar'/>
            </div>
            <Contacts />
          </div>
          <div className="row col-12 col-md-5">
            {
              footerLinks.map(
                col => <Column 
                  title={col.title} links={ col.links } key={col.title} 
                />
              )
            }
          </div>
          {/* <div className='container'>
            <div className="row justify-content-between">
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer