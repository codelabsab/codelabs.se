'use client';
import React from "react";
import jonas from "../../../../public/assets/customer/testimonials/jonas-lindstrom.jpeg";
import maja from "../../../../public/assets/customer/testimonials/maja-wedfelt.jpeg";
import Image from "next/image";
import {Roboto} from "next/font/google";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})

const CustomerLogos = () => {
    const listOfCustomers = ["klarna", "pricer", "dice", "pricerunner", "zebware", "tui"];
    return (
        <div className="bg-codelabs-primary5 ">
            <div className="flex items-end justify-center py-12 pt-24">
                <h2 className="font-title font-bold text-black text-center text-5xl md:text-7xl items-center justify-end">
                    Våra kunder.
                </h2>

            </div>
            <div className="max-w-8xl py-4 mx-auto">
                <div className="flex justify-center flex-wrap">
                    {listOfCustomers.map((customer, index) => {
                        return (
                            <Image
                                className="mx-4 my-4 xl:h-8 md:h-6 h-4 w-auto"
                                src={`/assets/customer/logo/${customer}.svg`}
                                alt={customer}
                                width={48}
                                height={48}
                                priority={true}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

const Divider = () => {
    return (
        <div className={"w-full bg-white"}>
            <svg width="100%" height="100" viewBox="0 0 500 80" preserveAspectRatio="none">
                <defs>
                    <clipPath id="shape">
                        <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z"/>
                    </clipPath>
                </defs>
                <rect x="0" y="0" width="500" height="80" fill="#F4E6FF" clipPath="url(#shape)"/>
            </svg>
        </div>
    );
}

export function Testimonials() {
    return (
        <section className="bg-codelabs-primary5 pt-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <Image
                            className="h-12 w-32 self-start"
                            src="/assets/customer/logo/tui.svg"
                            alt="tui"
                            width={64}
                            height={48}
                            priority={true}
                        />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900 ">
                                <p className={`mt-6 text-2xl ${roboto.className} font-light text-black`}>
                                    “Code Labs konsult varit en tillgång vad gäller att
                                    driva det tekniska arbetet framåt och få nya idéer kring
                                    förbättringar. Konsulten har varit lika duktig på att sätta
                                    sig in i befintliga lösningar, utveckla dem som att starta
                                    upp nytt. Vi kan varmt rekommendera Code Labs till andra!”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <Image
                                    src={maja}
                                    alt="maja"
                                    className="w-14 mb-3 rounded-full grayscale"
                                    height={56}
                                    width={56}
                                    priority={true}
                                />
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900 ">Maja Wedfelt</div>
                                    <div className="mt-1 text-gray-500 ">TUI - Delivery Lead</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div
                        className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20">
                        <Image
                            className="h-12 w-32 self-start"
                            src="/assets/customer/logo/dice.svg"
                            alt="dice"
                            width={64}
                            height={48}
                            priority={true}
                        />
                        <figure className="mt-10 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900 ">
                                <p className={`mt-6 text-2xl ${roboto.className} font-light text-black`}>
                                    “Code Labs konsult visade prov på anpassningsförmåga,
                                    stresstålighet och en förmåga att ha många bollar i luften
                                    då de involverades i flera projekt samtidigt.
                                    Jag rekommenderar Code Labs varmt och anlitar gladeligen deras
                                    konsulter i framtiden.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <Image
                                    src={jonas}
                                    alt="jonas"
                                    className="w-14 mb-3 rounded-full grayscale"
                                    height={56}
                                    width={56}
                                    priority={true}
                                />
                                <div className="text-base">
                                    <div className="font-semibold text-gray-900 ">Jonas Lindström</div>
                                    <div className="mt-1 text-gray-500 ">DICE - DevOps Operations Manager</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}


const Kunder = () => {
    return (
        <>
            <CustomerLogos/>
            <Testimonials/>
            <Divider/>
        </>
    )
}

export default Kunder;
