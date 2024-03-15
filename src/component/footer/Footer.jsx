import React, { useRef, useState, useContext } from 'react'
import emailjs from '@emailjs/browser';
import footershape from "../../img/footershape.png"
import "./Footer.css";
import { themeContext } from "../../Context";
import { HiLocationMarker, HiMail } from "react-icons/hi"
import { motion } from "framer-motion"

const Thankyou = () => {
  return (
    <span className='smt-msg'>Your Message has been successfully Send. We will Contact you soon.</span>
  )

}

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [result, showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ce90qi9', 'template_bflwbac', form.current, 'tIeah02Mjgs0s43kM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
    showResult(true)
  };

  return (

    <div className="footer-comp"
    id='footer'
    >

      <div className="main-foot"
        style={{ boxShadow: darkMode ? "0px 8px 32px 10px rgb(233 233 233 / 37%)" : "" }}  >

        <div className="w-left">
          <div className="awesome">
            <span>Get in Touch</span><br />
            <span >Contact Us</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
          <div className="c-right">
            <form action='' onSubmit={sendEmail} ref={form}>
              <input type="text" name="from_name" className="user" placeholder="Name" required />
              <input type="email" name="to_name" className="user" placeholder="Email" required />
              <textarea name="message" className="user" placeholder="Message" required />
              <button type="submit" className="button">Send</button>
              <div className='row'>
                {result ? <Thankyou /> : null}
              </div>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              >
              </div>

            </form>
          </div>
        </div>

      </div>

      <div className="details-foot">
        <div className="up-foot">

          <div className="about-us" style={{ boxShadow: darkMode ? "0px 5px 15px 0px rgb(233 233 233 / 37%)" : "" }}>
            <span>About VSS</span><br />
            <span>We are product company, who  builds <br />SaaS  products</span>
          </div>

          <div className='contact-info' style={{ boxShadow: darkMode ? "0px 5px 15px 0px rgb(233 233 233 / 37%)" : "" }}>
            <span>Contact Info</span><br />

            <span>
              <span className='sc-one'>
                <span ><HiLocationMarker style={{ fontSize: '20px', position: 'relative', bottom: '9px' }} /></span>
                <span >L-Square Building, Porwal Road, <br /> Dhanori Pune</span>
              </span><br />
              <span className='sc-two'>
                <span style={{ marginLeft: '-25px' }} ><HiMail style={{ position: 'relative', top: '3px' }} /></span>
                <span>info@vardhansoftware.com</span>
              </span>
            </span>



          </div>

          <div className="down-foot" >
            <span style={{ color: darkMode ? "white" : "" }}>Copyright © 2022 VSS - All rights reserved</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer;