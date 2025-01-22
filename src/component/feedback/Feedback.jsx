import React, { useContext }from 'react'
import "./Feedback.css";
import logoimg from "../../img/logoimg.png";
import { motion } from "framer-motion"
import { themeContext } from "../../Context";

const Feedback = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [value, setValue] = React.useState(5);

    return (

        <div className="feedback-comp">
            <div className="title-tag">
                <span >
                    <span style={{color: darkMode ? "white" : ""}}>User</span>
                    <span>Testimonials</span>
                </span>
            </div>
            <div className="card-flow">

                <div className="slider-container swiper">
                    <div className="slider-cont">
                        <div className="card-warper">
                            <motion.div class="card swiper-slide"
                            initial={{ rotate: 360 }}
                            whileInView={{ rotate: 0 }}
                            viewport={{ margin: "-40px" }}
                            transition={{ duration: 1, type: "spring" }}
                            
                            >
                                <div class="image-content">
                                    <span class="overlay"></span>
                                    <div class="card-image">
                                        <img src={logoimg} alt="" class="card-img" />
                                    </div>
                                </div>

                                <div class="card-content">
                                    <div class="rating">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                    </div>
                                    <p class="description"> I am really impressed by the quality of services I received from Vardhan Software Solutions. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good lead management iOS app for my marketing team.</p>
                                    <h2 class="name">Shreedevi Rao</h2>
                                    <span className="post" style={{color: darkMode ? "black" : ""}}>(Strategic Head Ametek Global)</span>
                                </div>

                            </motion.div>

                            <motion.div className="card swiper-slide"
                            initial={{ rotate: 360 }}
                            whileInView={{ rotate: 0 }}
                            viewport={{ margin: "-40px" }}
                            transition={{ duration: 1, type: "spring" }}
                            style={{marginLeft:"18px"}}
                            >
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img src={logoimg} alt="" className="card-img" />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>

                                    <p className="description">We would like to express our satisfaction on the 
                                    cooperation regarding the development of our web application. Sandeep and the development 
                                    team did a very professional job. We are satisfied with the solution given to us and with 
                                    the communication flow through the project. We look forward to working with them in future projects.
                                    </p>
                                    <h2 className="name">Ketan Vaijapure</h2>
                                    <span className="post" style={{color: darkMode ? "black" : ""}}>(Founder Neozant)</span>
                                </div>

                            </motion.div>

                            {/* <motion.div className="card swiper-slide"
                            initial={{ rotate: 360 }}
                            whileInView={{ rotate: 0 }}
                            viewport={{ margin: "-40px" }}
                            transition={{ duration: 1, type: "spring" }}>
                                <div className="image-content">
                                    <span className="overlay"></span>

                                    <div className="card-image">
                                        <img src={logoimg} alt="" className="card-img" />
                                    </div>
                                </div>

                                <div className="card-content">
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                    </div>

                                    <p className="description">We would like to express our satisfaction on the 
                                    cooperation regarding the development of our web application. Sandeep and the development 
                                    team did a very professional job. We are satisfied with the solution given to us and with 
                                    the communication flow through the project. We look forward to working with them in future projects.
                                    </p>
                                    <h2 className="name">David Dell</h2>
                                    <span className="post" style={{color: darkMode ? "black" : ""}}>(Strategic Head Ametek Global)</span>
                                </div>

                            </motion.div> */}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feedback;