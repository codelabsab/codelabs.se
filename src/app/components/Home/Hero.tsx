import React from "react";

const Hero = () => {
    return (
        <div className="bg-white hero-video-container h-screen flex items-center" style={{ position: "relative", zIndex: 0 }}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
                style={{ objectFit: "cover", width: "100%", height: "100%", zIndex: 0, top: 0, left: 0, position: "relative" }}
            >
                <source
                    src="https://www.dropbox.com/s/ixhbmwvkznfvfok/background.mp4?raw=1"
                    type="video/mp4"
                />
            </video>
            <div className="flex items-center justify-center pt-12 mt-12 mb-12 pb-12" style={{ position: "absolute", zIndex: 1, backgroundColor: "rgba(255, 255, 255, 0.4)", width: "100%"}}>
                <div className="flex justify-center flex-col items-center flex-wrap">
                    <h1 className="font-title font-poppins font-light md:text-7xl text-4xl mb-8 text-center">
                        Vi är <span className="font-bold font-montserrat">Code Labs</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;