import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-white">
            <main className="isolate">
                <div className="relative isolate -z-10">
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
                    <div className="w-full h-502 bg-transparent pt-24">
                        <div
                            className="flex flex-col md:flex-row justify-center md:justify-between max-w-5xl xl:pl-48 py-6">
                            <div className="col-8">
                                <div
                                    className="px-10 md:block">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl py-4">
                                        Träffa teamet.
                                    </h1>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        Träffa våra superstjärnor. Vi är ett gäng engagerade kollegor
                                        och vänner som älskar att skriva kod och snacka tech. Oroa dig
                                        inte för vi älskar att kavla upp ärmen och få jobb gjort också!
                                    </p>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none pb-4">
                                        Intresserad av att joina vårt team?
                                    </p>
                                    <Link
                                        href="/karriar/"
                                    >
                                        <button className="bg-codelabs-primary2 font-poppins font-medium px-4 text-white w-36 pt-2 pb-2 justify-center rounded flex items-center transition-all hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110">Bli en av oss</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Header;
