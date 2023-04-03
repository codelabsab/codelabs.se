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
                <svg
                    className="absolute inset-x-0 top-0 -z-20 h-[64rem] w-full stroke-codelabs-primary5 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none"/>
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-codelabs-primary5 ">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0}
                          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"/>
                </svg>
                <div
                    className="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
                    <svg viewBox="0 0 801 1036" aria-hidden="true" className="w-[50.0625rem]">
                        <path
                            fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
                            fillOpacity=".3"
                            d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
                        />
                        <defs>
                            <linearGradient
                                id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                                x1="508.179"
                                x2="-28.677"
                                y1="-116.221"
                                y2="1091.63"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC"/>
                                <stop offset={1} stopColor="#8B00FF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="overflow-hidden relative">
                    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="mx-auto">
                                <h1 className="text-5xl font-bold tracking-tight text-black sm:text-8xl ">
                                    Innovation & kreativitet
                                </h1>
                                <Image
                                    className="h-12 w-full text-codelabs-primary1 mx-auto"
                                    src={"/assets/paint/line.svg"}
                                    alt={"arrow"}
                                    width={224}
                                    height={224}
                                />
                                <p className={`mt-6 text-4xl ${roboto.className} font-light text-black`}>
                                    Vi strävar efter att skapa den mest innovativa och kreativa arbetsmiljön på
                                    marknaden, genom att uppmuntra till idéutbyte, nytänkande och
                                    äventyr. Och samtidigt ska vi ha jäkligt kul på vägen!
                                </p>
                            </div>
                        </div>
                        <Image
                            className="h-40 w-auto text-codelabs-primary1 mx-auto mt-12"
                            src={"/assets/cl-5.svg"}
                            alt={"arrow"}
                            width={224}
                            height={224}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VideoWithOverlay;
