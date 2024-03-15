import React from 'react'
import "./ContectUs.css";

const ContectUs = () => {
  return (
    <div className='contectus'>
        <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact Us</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          {/* <span>{done && "Thanks for Contacting me"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default ContectUs