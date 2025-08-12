import {Montserrat} from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({subsets: ['latin']})

export default function WhatWeDo() {
    return (
        <div className="mt-32 overflow-hidden sm:mt-40 py-12 pb-40 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h1 className={`text-6xl sm:text-7xl font-bold tracking-tight text-black ${montserrat.className}`}>
                            Why codelabs?
                        </h1>
                        <p className={`mt-6 text-3xl ${montserrat.className} font-medium text-black leading-relaxed`}>
                            Our expertise in <b>devops</b>, <b>ci/cd</b> and <b>cloud</b> is the reason our customers come to us.
                        </p>
                    </div>
                    <div className="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                        <Image
                            src="/assets/aveqia.jpeg"
                            width={800}
                            height={600}
                            priority={true}
                            alt=""
                            className="aspect-7/5 w-148 max-w-screen flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>
                    <div className="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                        <Image
                            src="/assets/marre.jpeg"
                            width={800}
                            height={600}
                            priority={true}
                            alt=""
                            className="aspect-7/5 w-148 max-w-screen flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>
                    <div className="lg:w-full lg:max-w-lg lg:pb-8">
                    <p className={`mt-6 text-3xl ${montserrat.className} font-medium text-black leading-relaxed`}>
                            Community, team, experiences and adventures is why our colleagues stay with us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
