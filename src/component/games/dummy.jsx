import React from 'react'
import appstr from '../../img/appstr.png'
import trans from '../../img/trans.png'
import wisevdo from '../../img/wisevdo.png'
import wisewdo from '../../img/wisewdo.png'

const dummy = () => {
    return (
        <>
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="card" style={{ width: "100%", overflow: 'hidden' }}>
                            <img class="img-fluid" alt="100%x280"
                                src={wisewdo} />
                            <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                <h4 class="card-title">AI-Powered Video Difference Analyzer</h4>
                                <p class="card-text">Harness the power of AI to compare two videos from the same location and
                                    pinpoint differences with precision. The system not only highlights variations but also
                                    analyzes the origins of the discrepancies. Ideal for surveillance, quality control, and
                                    environmental monitoring, this tool delivers unparalleled accuracy and actionable insights.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card" style={{ width: "100%", overflow: 'hidden' }}>
                            <img class="img-fluid" alt="100%x280"
                                src={appstr} />
                            <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                <h4 class="card-title">Intelligent Live Streaming Orchestration Platform</h4>
                                <p class="card-text">Redefine live streaming with an AI-empowered platform supporting multi-user
                                    roles like admins and viewers. Admins can manage streams seamlessly while ensuring secure,
                                    real-time data transfer over private networks. With its adaptive AI, the platform ensures scalability,
                                    reliability, and an enhanced streaming experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card" style={{ width: "100%", overflow: 'hidden' }}>
                            <img class="img-fluid" alt="100%x280"
                                src={trans} />
                            <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                <h4 class="card-title">AI-Driven Offline Multilingual Translator</h4>
                                <p class="card-text">Break language barriers with this advanced offline translator. Input audio in one language,
                                    and the system delivers translations in text or audio form across multiple languages, including Nepali, Urdu,
                                    and Marathi. Designed for remote and low-connectivity environments, it guarantees efficiency and accessibility
                                    through cutting-edge AI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item active">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="card" style={{ width: "100%", overflow: 'hidden' }}>
                            <img class="img-fluid" alt="100%x280" src={wisevdo} />
                            <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                <h4 class="card-title">AI Video Analysis Tool</h4>
                                <p class="card-text">Analyze videos with AI to generate segments, transcriptions, thumbnails, titles, and tags. Perfect for platforms like YouTube, including live streams, this tool automates content creation and maximizes engagement for creators.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card" style={{ width: "100%", overflow: 'hidden' }}>
                            <img class="img-fluid" alt="100%x280" src={bummble} />
                            <div class="card-body" style={{ color: darkMode ? "black" : "" }}>
                                <h4 class="card-title">AI Ad Detection Tool</h4>
                                <p class="card-text">Detect and replace ads in videos using AI. This tool seamlessly identifies embedded ads and swaps them with user-provided content, improving ad targeting, enhancing efficiency, and customizing experiences for diverse audiences.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card" style={{ width: "100%", overflow: 'hidden' }}>
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
        </>

    )
}

export default dummy