import React from "react";
import Link from "next/link";
import {Montserrat, Roboto} from 'next/font/google'

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})


const OmOss = () => {
    return (
        <div>
            <div className="bg-codelabs-primary4" id={`#intro`}>
                <div>
                    <div
                        className="flex md:flex-row flex-col mx-auto py-24 px-4 justify-center items-center max-w-7xl relative">
                        <div className="px-4 z-10">
                        <h1 className={`text-5xl sm:text-7xl font-bold tracking-tight text-black ${montserrat.className}`}>
                                Architecting the Future.<br />Empowering the Engineer.
                            </h1>
                            <p className={`mt-6 text-2xl sm:text-3xl ${montserrat.className} font-medium text-black leading-relaxed max-w-3xl`}>
                            Join Stockholm&apos;s premier DevOps consultancy. We build critical platforms for Sweden&apos;s biggest brands and invest our energy into a greener planet.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-start py-12 z-10">
                                <Link
                                    href={`/careers`}
                                >
                                    <button
                                        className={`bg-codelabs-primary2 font-bold text-2xl px-6 text-white w-64 h-16 pt-2 pb-2 justify-center rounded-full flex items-center hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110 ${montserrat.className}`}>
                                        Join the Team
                                    </button>
                                </Link>
                                <Link
                                    href={`#war-stories`}
                                >
                                    <button
                                        className={`bg-transparent border-2 border-codelabs-primary2 font-bold text-2xl px-6 text-codelabs-primary2 w-64 h-16 pt-2 pb-2 justify-center rounded-full flex items-center hover:bg-codelabs-primary2 hover:text-white hover:shadow-xl transform transition duration-100 hover:scale-110 ${montserrat.className}`}>
                                        See Our Work
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OmOss;
