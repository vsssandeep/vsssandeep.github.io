import React , { useContext }from 'react'
import "./Ourteam.css";
import pic from "../../img/pic.webp";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"
import Supriya from '../../img/avt/supriya.jpg'
import paras from '../../img/avt/paras.jpg'
import vishal from '../../img/avt/vishal.jpg'
import sandip from '../../img/avt/Sandeep.jpg';
import asha from '../../img/avt/Asha.jpg'
import preeti from '../../img/avt/Preeti.jpg'
import harshi from '../../img/avt/Hirshi.jpg'

const Ourteam = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="ourteam-comp">

      <div className="team-left">
        <div className="shape">
          <div className='team-l-one'></div>

          <motion.div className="text-area"
          initial={{ marginLeft:'35%' }}
          whileInView={{ marginLeft: '1.8%' }}
          transition={{ duration: 1, type: "spring" }}
          >
            <span>Our Team</span>
            <span>Driven by creativity and commitment, our team is dedicated to turning ideas into impactful realities that shape the future.</span>
          </motion.div>

        </div>

      </div>


      <div className="team-right">
        <motion.div className='r-main'
        initial={{ marginLeft:'35%' }}
        whileInView={{ marginLeft: '1.8%' }}
        transition={{ duration: 1, type: "spring" }}
        >
          <div className="r-child-a child">
            <img src={Supriya} alt="Profile-Pic" className='img-child' />
            <span style={{color: darkMode ? "white" : ""}}>SUPRIYA</span><br />
            <span>DIRECTOR</span>
          </div>

          <div className="r-child-b child">
            <img src={asha} alt="Profile-Pic" className='img-child' />
            <span style={{color: darkMode ? "white" : ""}}>ASHA</span><br />
            <span>DIRECTOR</span>
          </div>

          <div className="r-child-c child">
            <img src={sandip} alt="Profile-Pic" className='img-child' />
            <span style={{color: darkMode ? "white" : ""}}>SANDEEP</span><br />
            <span>CTO</span>
          </div>

          <div className="r-child-d child">
            <img src={preeti} alt="Profile-Pic" className='img-child' />
            <span style={{color: darkMode ? "white" : ""}}>PRETTI</span><br />
            <span>HR</span>
          </div>

          <div className="r-child-e child">
            <img src={vishal} alt="Profile-Pic" className='img-child' />
            <span style={{color: darkMode ? "white" : ""}}>VISHAL</span><br />
            <span>Director Of Eng.</span>
          </div>

          <div className="r-child-f child">
            <img src={harshi} alt="Profile-Pic" className='img-child' />
            <span style={{color: darkMode ? "white" : ""}}>HRISHI</span><br />
            <span>Marketting Head</span>
          </div>

          <div className="r-child-g child">
            <img src={paras} alt="Profile-Pic" className='img-child' />
            <span style={{color: darkMode ? "white" : ""}}>PARAS</span><br />
            <span>Full-Stack Dev.</span>
          </div>

        </motion.div>
      </div>

    </div>
  )
}

export default Ourteam