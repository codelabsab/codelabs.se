import React from "react";
import Link from "next/link";
import {Inter, Montserrat, Poppins, Roboto} from 'next/font/google'

const monsterrat = Montserrat({
    weight: ['100','200','300','400', '500', '600', '700'],
    subsets: ['latin']
})

const inter = Inter({
    weight: ['100','200','300','400', '500', '600', '700'],
    subsets: ['latin']
})

const roboto = Roboto({
    weight: ['100','300','400', '500', '700', '900'],
    subsets: ['latin']
})

const poppins = Poppins({
    weight: ['100','200','300','400', '500', '600', '700'],
    subsets: ['latin']
})


const OmOss = () => {
    return (
        <div>
            <div className="bg-codelabs-primary5">
                <div>
                    <div
                        className="flex md:flex-row flex-col mx-auto py-24 px-4 justify-center items-center max-w-7xl relative">
                        <div className="px-4 z-10">
                            <h1 className={`text-6xl sm:text-7xl font-bold tracking-tight text-black ${roboto.className}`}>
                                What a team
                            </h1>
                            <p className={`mt-6 text-4xl ${roboto.className} font-extralight text-gray-600`}>
                                Vi är ett <b className={`${inter.className} font-extrabold`}>team</b> där <i>kreativitet</i>, <i>samarbete</i> och <i>glädje</i> är i fokus. Vi har en
                                avslappnad företagskultur som uppmuntrar till öppen kommunikation och kreativt tänkande.
                                Vi tror att en glad och motiverad personal är nyckeln till att leverera resultat för
                                våra kunder.
                            </p>
                            <div className="flex justify-start py-12 z-10">
                                <Link
                                    href="/team/"
                                >
                                    <button
                                        className={`bg-codelabs-primary2 font-bold px-4 text-white w-52 h-20 pt-2 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110 ${monsterrat.className}`}>
                                        Jag vill veta mer!
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
