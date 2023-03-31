import React from "react";
import { Montserrat } from 'next/font/google'

const monsterrat = Montserrat({ subsets: ['latin'] })

const VideoWithOverlay = () => {
    return (
        <div className={`hero-video-wrapper max-h-screen mx-auto my-auto ${monsterrat.className}`}>
            <video autoPlay playsInline muted loop className="max-h-screen max-w-7xl mx-auto my-auto">
                <source
                    src="/assets/video/iceland.mp4"
                />
            </video>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%" >
                        <rect x="0" y="0" width="100%" height="100%" />
                        <text x="75" y="35">code</text>
                        <text x="107" y="70">labs</text>
                    </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" />
            </svg>
        </div>
    );
};

export default VideoWithOverlay;
