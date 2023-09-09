import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
       alt="logo pokemon" />
       <div className="footer-icon">
          <a href="#">
            <i className="fa-brands fa-facebook fa-xl"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp fa-xl"></i>
          </a>
        </div>
        <p className="m-0">
          ©Pokemon Company 2023.
        </p>
    </footer>
  )
}