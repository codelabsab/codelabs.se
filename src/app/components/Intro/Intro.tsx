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
                                Hello, world!
                            </h1>
                            <p className={`mt-6 text-6xl ${roboto.className} font-light text-black`}>
                                Vi är ett team där <i>kreativitet</i>, <i>gemenskap</i> och <i>glädje</i> är
                                i fokus.
                            </p>
                            <div className="flex justify-start py-12 z-10">
                                <Link
                                    href={`/team`}
                                >
                                    <button
                                        className={`bg-codelabs-primary2 font-bold text-2xl px-4 text-white w-64 h-20 pt-2 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110 ${montserrat.className}`}>
                                        Mer om teamet!
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
