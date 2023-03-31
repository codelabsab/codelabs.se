import {Poppins} from "next/font/google";
import React from "react";
import Image from "next/image";

const poppins = Poppins({
    weight: ['100','200','300','400', '500', '600', '700'],
    subsets: ['latin']
})

export default function WhatWeDo() {
    return (
        <div className="mt-32 overflow-hidden sm:mt-40 py-12 pb-40 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className={`text-3xl font-bold tracking-tight text-black sm:text-7xl ${poppins.className}`}>Vad vi gör.</h2>
                        <p className={`mt-6 text-2xl font-light text-gray-600 ${poppins.className}`}>
                            Förutom att leverera resultat till våra fantastiska kunder så har vi även ett
                            stort social behov. Vi gillar att synka, ses och umgås. Att hitta på saker tillsammans
                            är en stor del av vår kultur. Livet ska vara roligt tycker vi, ett äventyr!
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <Image
                                src="/assets/middag.jpeg"
                                alt=""
                                width={800}
                                height={600}
                                priority={true}
                                className="aspect-[7/5] w-[37rem] max-w-screen rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                        <div
                            className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <Image
                                    src="/assets/aveqia.jpeg"
                                    width={800}
                                    height={600}
                                    priority={true}
                                    alt=""
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <Image
                                    src="/assets/marre.jpeg"
                                    width={800}
                                    height={600}
                                    priority={true}
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}