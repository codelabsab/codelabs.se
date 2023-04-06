import {Inter, Montserrat, Poppins, Roboto} from "next/font/google";
import React from "react";
import Image from "next/image";

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})

export default function WhatWeDo() {
    return (
        <div className="mt-32 overflow-hidden sm:mt-40 py-12 pb-40 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h1 className={`text-6xl sm:text-7xl font-bold tracking-tight text-black ${roboto.className}`}>
                            Vad vi gör.
                        </h1>
                        <p className={`mt-6 text-6xl ${roboto.className} font-light text-black`}>
                            Löser intressanta utmaningar med hjälp av
                            kreativa lösningar för våra kunder.
                        </p>
                    </div>
                    <div className="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                        <Image
                            src="/assets/aveqia.jpeg"
                            width={800}
                            height={600}
                            priority={true}
                            alt=""
                            className="aspect-[7/5] w-[37rem] max-w-screen flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>
                    <div className="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                        <Image
                            src="/assets/marre.jpeg"
                            width={800}
                            height={600}
                            priority={true}
                            alt=""
                            className="aspect-[7/5] w-[37rem] max-w-screen flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>
                    <div className="lg:w-full lg:max-w-lg lg:pb-8">
                        <p className={`mt-6 text-6xl ${roboto.className} font-light text-black`}>
                            Vi hjälper varandra att utvecklas samtidigt som vi firar våra framgångar, som ett <b>team</b>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}