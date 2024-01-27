import React from "react";
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']})


const VideoWithOverlay = () => {
    return (
        <main className={`isolate ${montserrat.className}`}>
            <div className="relative">
                <div className={`hero-video-wrapper max-w-7xl isolate relative -z-20`}>
                    <video autoPlay playsInline muted loop>
                        <source
                            src="/assets/video/iceland.mp4"
                        />
                    </video>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%"/>
                                <text x="75" y="35">code</text>
                                <text x="109" y="70">labs</text>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%"/>
                    </svg>
                </div>
            </div>
        </main>
    );
};

export default VideoWithOverlay;
