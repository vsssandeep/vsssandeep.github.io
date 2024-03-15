

import React, { useContext } from 'react'
import "./Home.css";
import { motion } from "framer-motion"
import { themeContext } from "../../Context";

const Home = () => {

    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='home-comp' id="home-sec">
            <div className="home-left">

                <div className="heading-home">
                    <span style={{ color: darkMode ? "white" : "" }}>Convert Ideas to</span>
                    <span>Digital Reality</span>
                    <span>
                        We are development powerhouse, with vast
                        expereience of software development &
                        consulting multiple startups.
                    </span>
                </div>
                {/* <button className='button home-button'>Hire Me</button> */}
            </div>
{/* 
            <div className="home-right">
                <motion.div className='m-div-one'
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1.1,
                        rotate: 50,
                    }}
                >
                    <motion.div className="cube-design"
                        initial={{ top: "-10%", left: "10%" }}
                        whileInView={{ left: "0%", top: "-5%" }}
                        transition={transition}
                    >
                        <div className="face "><span className='nameTag'>nϱiƨɘꓷ XU\IU</span></div>
                        <div className="face"><span className='nameTag'>γϱolonતɔɘT IA</span></div>
                        <div className="face"><span className='nameTag'>Cloud Storage</span></div>
                        <div className="face"><span className='nameTag'>Ɐbb Dԍʌԍlobɯԍuϝ</span></div>
                        <div className="face"><span className='nameTag'>ɘɔɿɘmmoɔ-Ǝ</span></div>
                        <div className="face"><span className='nameTag'>Web Development</span></div>
                    </motion.div>
                </motion.div>
            </div> */}
            <div className="home-right">
                <motion.div className='m-div-one'
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1.1,
                        rotate: 50,
                    }}
                >
                    <motion.div className="cube-design"
                        initial={{ top: "-10%", left: "10%" }}
                        whileInView={{ left: "0%", top: "-5%" }}
                        transition={{ duration: 2, type: "spring" }}
                        
                    >
                        <div className="face "><span className='nameTag'>nϱiƨɘꓷ XU\IU</span></div>
                        <div className="face"><span className='nameTag'>γϱolonતɔɘT IA</span></div>
                        <div className="face"><span className='nameTag'>Cloud Storage</span></div>
                        <div className="face"><span className='nameTag'>Ɐbb Dԍʌԍlobɯԍuϝ</span></div>
                        <div className="face"><span className='nameTag'>ɘɔɿɘmmoɔ-Ǝ</span></div>
                        <div className="face"><span className='nameTag'>Web Development</span></div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home