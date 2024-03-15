import React, { useContext } from 'react'
import "./Games.css";
import logoimg from "../../img/logoimg.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import ReactCardSlider from "react-card-slider-component";
import love from '../../img/love.jpeg'
import cat from '../../img/cat.jpeg'
import jack from '../../img/jack.jpeg'
import power from '../../img/power.jpeg'
import bird from '../../img/bird.jpeg'
import hms from '../../img/hms.png'
import bummble from '../../img/bummble.png'
import optimus from '../../img/optimus.png'

const Games = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="product-comp" id='product'>
            <div className="product-title">
                <span>
                    <span style={{ color: darkMode ? "white" : "" }}>Our</span>
                    <span>Our Services</span>
                </span>
            </div>
            <div className="product-list">
              
                <div class="container" style={{ marginTop: "-35px" }}>
                    <div class="row">
                        <div class="col-6">
                            <h3 class="mb-3"></h3>
                        </div>
                        <div class="col-5 text-right">
                            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button"
                                data-slide="prev">
                                <i class="fa fa-arrow-left"></i>
                            </a>
                            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i class="fa fa-arrow-right"></i>
                            </a>
                        </div>
                        <div class="col-12">
                            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                                <div class="carousel-inner" style={{ width: "82%", marginLeft: "9%" }}>
                                    <div class="carousel-item active">
                                        <div class="row" >

                                            <div class="col-md-4 mb-3" >
                                                <div class="card" style={{ width: "100%",overflow:'hidden' }}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db308021809397.56307dd64dd0a.jpg" />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">Crazy Birds: Flap, Dash, Soar!</h4>
                                                        <p class="card-text">Get ready for a feathered frenzy in Crazy Birds, a zany
                                                            cross-platform adventure built on the groundbreaking Neozant Gaming Engine!
                                                            Available across all devices,
                                                            this game will have you flapping, dashing, and soaring through a wild avian
                                                            escapade like never before.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card" style={{ width: "100%",overflow:'hidden' }}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src={love} />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">Love Birds: A Whimsical Adventure for Android</h4>
                                                        <p class="card-text">Embark on a whimsical journey with "Love Birds," the enchanting
                                                            mobile game designed to warm your heart and challenge your mind. Crafted for
                                                            Android platforms, this game blends charming gameplay with captivating visuals
                                                            for an experience like no other.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card" style={{ width: "100%",overflow:'hidden'}}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src={cat} />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">Lucky Cat!: Spin & Win with Fortune's Feline</h4>
                                                        <p class="card-text">Step into a world of luck and charm with "Lucky Cat!", the
                                                            purrfectly delightful Chinese cat-themed game where fortune favors the bold!
                                                            Available on Android, this game combines the ancient art of luck with the modern
                                                            thrill of spinning the wheel.</p>



                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">

                                            <div class="col-md-4 mb-3">
                                                <div class="card" style={{ width: "100%" ,overflow:'hidden'}}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src={jack} />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">Save the Jack!: A Thrilling Adventure in JavaScript</h4>
                                                        <p class="card-text">Prepare for a heart-pounding rescue mission in "Save the
                                                            Jack!", an adrenaline-fueled game built in JavaScript that puts you in the
                                                            driver's seat of heroic action! With customizable options to tailor your
                                                            experience, every level is a new challenge waiting to be conquered.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card" style={{ width: "100%" ,overflow:'hidden'}}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src={power} />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">Powerbomb: Enter the Arena of Champions</h4>
                                                        <p class="card-text">Get ready to rumble in "Powerbomb", the adrenaline-fueled
                                                            wrestling extravaganza developed exclusively for our client's internal portal!
                                                            Built on the powerful ImpactJS engine, this game brings the thrill of the ring
                                                            to your fingertips, compatible with all modern browsers for seamless gameplay.
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card" style={{ width: "100%" ,overflow:'hidden'}}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src={bird} />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">Bets & Bluffs: Multiplayer Thrills Await!</h4>
                                                        <p class="card-text">Gather your friends and get ready for the ultimate showdown of
                                                            wits and luck in "Bets & Bluffs", the electrifying multiplayer betting game
                                                            designed for 2-6 players! Whether you're a seasoned gambler or a casual player,
                                                            this game promises heart-pounding excitement with every bet.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">

                                            <div class="col-md-4 mb-3">
                                                <div class="card" style={{ width: "100%",overflow:'hidden' }}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src={hms} />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">VSS Hospital Application</h4>
                                                        <p class="card-text">VSS Hospital App: Streamline operations, manage appointments,
                                                            track records. Customizable for multiple hospitals. Efficient, secure,
                                                            user-friendly interface ensures seamless healthcare management. Enhance patient
                                                            care delivery with comprehensive features.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card" style={{ width: "100%" ,overflow:'hidden'}}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src={bummble} />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">Bummble</h4>
                                                        <p class="card-text">Bummble: A service-based project for Anantadi Group, offering
                                                            tailored solutions to meet unique needs. With a focus on innovation and
                                                            reliability, Bummble is dedicated to delivering exceptional service, ensuring
                                                            the success and satisfaction of Anantadi Group initiatives and endeavors.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <div class="card" style={{ width: "100%" ,overflow:'hidden'}}>
                                                    <img class="img-fluid" alt="100%x280"
                                                        src={optimus} />
                                                    <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                                        <h4 class="card-title">Optimus</h4>
                                                        <p class="card-text">Bummble: A service-based project for Anantadi Group, offering
                                                            tailored solutions to meet unique needs. With a focus on innovation and
                                                            reliability, Bummble is dedicated to delivering exceptional service, ensuring
                                                            the success and satisfaction of Anantadi Group initiatives and endeavors.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Games