import React , { useContext } from 'react'
import "./Product.css";
import logoimg from "../../img/logoimg.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"

const Product = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="product-comp" id='product'>
        <div className="product-title">
            <span>
                <span style={{color: darkMode ? "white" : ""}}>We provide few</span>
                <span>Services</span>
            </span>
        </div>
        <div className="product-list">
            <div className="product-main">
                <div className="section-one product-detail"
                
                >
                    <img src={logoimg} alt="" style={{border: darkMode ? "1px solid white" : ""}}/>
                    <motion.div className='one-details'
                    initial={{ marginLeft:'35%' }}
                    whileInView={{ marginLeft: '1.8%' }}
                    transition={{ duration: 1, type: "spring" }}>
                        <span>
                            <span >Sales-N-Service</span><br />
                            <span> is a platform which caters the entire lifecycle of the service-management, sales and inventory. 
                                This caters the ticket handling process, and generating of reports which can help with GST.</span>
                        </span>
                    </motion.div>
                </div>

                <div className="section-two product-detail">
                
                    <motion.div className='one-details mini-one'
                    initial={{ marginRight:'35%' }}
                    whileInView={{ marginRight: '1.8%' }}
                    transition={{ duration: 1, type: "spring" }}>
                        <span>
                            <span>Smart-N-Automatic</span><br />
                            <span> is a smart homes product which enables converting 
                                of your traditional switches with smart ones at affordable prices.</span>
                        </span>
                    </motion.div>
                    <img src={logoimg} alt="" style={{border: darkMode ? "1px solid white" : ""}}/>
                </div>

                <div className="section-three product-detail">
                <img src={logoimg} alt="" style={{border: darkMode ? "1px solid white" : ""}}/>
                    <motion.div className='one-details'
                    initial={{ marginLeft:'35%' }}
                    whileInView={{ marginLeft: '1.8%' }}
                    transition={{ duration: 1, type: "spring" }}>
                        <span>
                            <span>Fast-N-Fantastic</span><br />
                            <span> is a low code platform which enables the faster development of any UI application. 
                                Which can integrate with any backend capabilities of your choice. 
                                Also the code generated from this low-code is readable and editable.</span>
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product