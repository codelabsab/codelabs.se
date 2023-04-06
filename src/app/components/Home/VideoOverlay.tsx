import React from "react";
import {Montserrat, Roboto} from 'next/font/google'
import Image from "next/image";

const monsterrat = Montserrat({subsets: ['latin']})

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})

const VideoWithOverlay = () => {
    return (
        <main className={`isolate ${monsterrat.className}`}>
            <div className="-z-10 relative">
                <div className={`hero-video-wrapper max-h-screen mx-auto my-auto isolate relative -z-10`}>
                    <video autoPlay playsInline muted loop className="max-h-screen max-w-7xl mx-auto my-auto">
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
