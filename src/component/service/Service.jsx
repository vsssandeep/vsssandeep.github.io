import React, { useContext } from 'react'
import './Service.css'
import { motion } from "framer-motion"
import { themeContext } from "../../Context";
import logoimg from "../../img/logoimg.png";

const Service = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
<div className='service-comp' id='service'>

      <div className="left-serv"
      
      >
        <div className="sec-one first" style={{ backgroundColor: darkMode ? "black" : "" }}>
          <div className="circle-box one" >
            <div class="circle">
              <span></span>
            </div>
            <div className="img-div">
              <img src="https://cdn-icons-png.flaticon.com/512/4940/4940803.png" alt="" className='product' />
            </div>
            <div class="circle-c">
              <span></span>
            </div>
          </div>
          <span className='ones' style={{ marginRight: '11px' }}>SaaS <br />Applications</span>
        </div>

        <div className="sec-one second " style={{ backgroundColor: darkMode ? "black" : "" }}>
          <span className='headers-res ones'>Development <br /> Consulation</span>
          <div className="circle-box two">
            <div class="circle">
              <span>
              </span>
            </div>
            <div className="img-div">
              <img src="https://cdn-icons-png.flaticon.com/512/2942/2942789.png" alt="" className='product' />
            </div>
            <div class="circle-c">
              <span></span>
            </div>
          </div>
        </div>

        <div className="sec-one third" style={{ backgroundColor: darkMode ? "black" : "" }}>
          <div className="circle-box three">
            <div class="circle">
              <span>
              </span>
            </div>
            <div className="img-div">
              <img src="https://cdn-icons-png.flaticon.com/512/356/356490.png" alt="" className='product' />
            </div>
            <div class="circle-c">
              <span></span>
            </div>
          </div>
          <span className='headers-res ones' style={{ marginRight: '44px' }}>Cloud <br />Consulting</span>
        </div>

        <div className="sec-one fourth" style={{ backgroundColor: darkMode ? "black" : "" }}>
          <span className='headers-res ones' >UX/UI <br /> Consulting</span>
          <div className="circle-box four">
            <div class="circle">
              <span>
              </span>
            </div>
            <div className="img-div">
              <img src="https://cdn-icons-png.flaticon.com/512/7858/7858975.png" alt="" className='product' />
            </div>
            <div class="circle-c">
              <span></span>
            </div>
          </div>
        </div>

        <div className="sec-one fiveth" style={{ backgroundColor: darkMode ? "black" : "" }}>
          <div className="circle-box five">
            <div class="circle">
              <span>
              </span>
            </div>
            <div className="img-div">
              <img src="https://cdn-icons-png.flaticon.com/512/186/186239.png" alt="" className='product' />
            </div>
            <div class="circle-c">
              <span></span>
            </div>
          </div>
          <span className='headers-res ones' style={{ marginRight: '35px' }}>Mobile <br /> Application</span>
        </div>
      </div>

      <div className="right-serv">

        <div className="text-sec">
          <span style={{ color: darkMode ? "white" : "" }}>We provide</span>
          <span>mentioned services</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            ispum is simpley dummy text of printing
          </spane>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

      </div>

    </div>
  )
}

export default Service;