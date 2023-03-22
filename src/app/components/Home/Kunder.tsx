'use client';
import React from "react";
import ica from "../../../../public/assets/customer/ica.svg";
import klarna from "../../../../public/assets/customer/klarna.svg";
import pricer from "../../../../public/assets/customer/pricer.svg";
import dice from "../../../../public/assets/customer/dice.svg";
import hm from "../../../../public/assets/customer/hm.svg";
import kindred from "../../../../public/assets/customer/kindred.svg";
import pricerunner from "../../../../public/assets/customer/pricerunner.svg";
import netent from "../../../../public/assets/customer/netent.svg";
import zebware from "../../../../public/assets/customer/zebware.svg";
import tui from "../../../../public/assets/customer/tui.svg";
import jonas from "../../../../public/assets/customer/jonas-lindstrom.jpeg";
import maja from "../../../../public/assets/customer/maja-wedfelt.jpeg";
import Image from "next/image";

const listOfCustomers = ["ica", "klarna", "pricer", "dice", "hm", "kindred", "pricerunner", "netent", "zebware", "tui"];

const Kunder = () => {
    return (
        <>
            <div>
                <div className="bg-gradient-to-b from-white via-codelabs-tertiary5 to-codelabs-primary5">
                    <div className="flex items-end justify-center pt-12">
                        <h2 className="font-title font-bold text-black-gray text-center text-3xl md:text-5xl items-center justify-end">
                            Kunder som <span className="text-codelabs-primary1">litar på oss</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap pt-24 flex justify-center">
                        {listOfCustomers.map((customer, index) => {
                            return (
                                    <div key={customer}>
                                        <Image
                                            className="mx-4 mb-7 md:w-18"
                                            src={`/assets/customer/${customer}.svg`}
                                            alt={customer}
                                            width={64}
                                            height={48}
                                            priority={true}
                                            key={index}
                                        />
                                    </div>
                            );
                        })}
                    </div>
                    <div className="px-4 md:px-10 grid md:grid-cols-2 grid-cols-1 gap-4 justify-center py-24">
                        <div className=" w-full flex justify-center mb-8 h-auto md:h-72 ">
                            <div
                                className="our-customer-shadow py-6 px-8 mx-w-600 flex flex-col justify-between border_1 border-grey-lightest">
                                <div className="flex justify-center items-center flex-col text-center grayscale">
                                    <Image
                                        src={jonas}
                                        alt="jonas"
                                        className="w-14 mb-3 rounded-full grayscale"
                                        height={56}
                                        width={56}
                                        priority={true}
                                    />
                                    <p className="font-poppins text-sm text-black-dark mb-1">Jonas Lindström</p>
                                    <p className="font-medium text-sm mb-4 text-codelabs-primary1">DICE - DevOps
                                        Operations Manager</p>
                                </div>
                                <p className="font-poppins font-light text-sm pb-12">
                                    Code Labs konsult visade prov på anpassningsförmåga,
                                    stresstålighet och en förmåga att ha många bollar i luften
                                    då de involverades i flera projekt samtidigt.
                                    Jag rekommenderar Code Labs varmt och anlitar gladeligen deras
                                    konsulter i framtiden.
                                </p>
                            </div>
                        </div>
                        <div className=" w-full flex justify-center mb-8 h-auto md:h-72 ">
                            <div
                                className="our-customer-shadow py-6 px-8 mx-w-600 flex flex-col justify-between border_1 border-grey-lightest">
                                <div className="flex justify-center items-center flex-col text-center grayscale">
                                    <Image
                                        src={maja}
                                        alt="maja"
                                        className="w-14 mb-3 rounded-full grayscale"
                                        height={56}
                                        width={56}
                                        priority={true}
                                    />
                                    <p className="font-poppins text-sm text-black-dark mb-1">Maja Wedfelt</p>
                                    <p className="font-medium text-sm mb-4 text-codelabs-primary1">TUI - Delivery
                                        Lead</p>
                                </div>
                                <p className="font-poppins font-light text-sm pb-12">
                                    Code Labs konsult varit en tillgång vad gäller att
                                    driva det tekniska arbetet framåt och få nya idéer kring
                                    förbättringar. Konsulten har varit lika duktig på att sätta
                                    sig in i befintliga lösningar, utveckla dem som att starta
                                    upp nytt. Vi kan varmt rekommendera Code Labs till andra!
                                </p>
                            </div>
                            <div className="text-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full"}>
                <svg width="100%" height="100" viewBox="0 0 500 80" preserveAspectRatio="none">
                    <defs>
                        <clipPath id="shape">
                            <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z"/>
                        </clipPath>
                    </defs>
                    <rect x="0" y="0" width="500" height="80" fill="#F4E6FF" clipPath="url(#shape)"/>
                </svg>
            </div>
        </>
    );
}
    ;

    export default Kunder;
