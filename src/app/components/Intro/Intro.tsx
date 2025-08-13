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
                        <h1 className={`text-6xl sm:text-7xl font-bold tracking-tight text-black ${montserrat.className}`}>
                                From code to cloud
                            </h1>
                            <p className={`mt-6 text-3xl ${montserrat.className} font-medium text-black leading-relaxed`}>
                            We help organizations deliver faster, more secure and more reliable services
                            </p>
                            <div className="flex justify-start py-12 z-10">
                                <Link
                                    href={`/team`}
                                >
                                    <button
                                        className={`bg-codelabs-primary2 font-bold text-3xl px-4 text-white w-64 h-20 pt-2 pb-2 justify-center rounded-full flex items-center hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110 ${montserrat.className}`}>
                                        The team
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
