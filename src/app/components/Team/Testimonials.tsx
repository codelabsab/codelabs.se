import React from "react";
import Paer from "../../../../public/assets/team/paer2.jpeg";
import Mauricio from "../../../../public/assets/team/mauricio.jpeg";
import Image from "next/image";

const Testimonials = () => {
    return (
        <div>
            <main className="isolate relative">
                <div className="absolute -z-10 w-full blur-sm">
                    {/*<Splash3/>*/}
                </div>
                <div
                    className="max-w-6xl mx-auto flex pt-24 lg:pb-28 pb-8 justify-center items-center flex-col mb-4 mt-4">
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 text-center">
                        <div className={"px-4"}>
                            <div
                                className="pt-4 left-full text-left text-7xl font-serif leading-none text-codelabs-primary3"
                                aria-hidden="true">&ldquo;
                            </div>
                            <blockquote
                                className="font-poppins text-5xl italic font-extrabold text-center text-grey-normal">
                                Pär är en uppskattad kollega som varit med sedan start. Han gillar bland annat tech,
                                skriva kod och cykla nedför branta backar.
                            </blockquote>
                            <p className="pt-4">
                                <cite className="text-left font-poppins text-2xl text-grey-normal">Pär Berge</cite>
                            </p>
                            <p>
                                <cite className="font-thin font-poppins text-2xl text-codelabs-primary1">DevOps
                                    Engineer</cite>
                            </p>
                        </div>
                        <div>
                            <Image
                                src={Paer}
                                alt={"Pär"}
                                className="object-cover h-full md:rounded-t-3xl "
                                width={1200}
                                height={1217}
                                priority={true}
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 text-center ">
                        <div>
                            <Image
                                src={Mauricio}
                                alt={"Mauricio"}
                                className="object-cover h-full md:rounded-b-3xl"
                                width={1200}
                                height={1217}
                                priority={true}
                            />
                        </div>
                        <div className={"px-4"}>
                            <div
                                className="pt-4 left-full text-left text-7xl font-serif leading-none text-codelabs-primary3"
                                aria-hidden="true">&ldquo;
                            </div>
                            <blockquote
                                className="font-poppins text-5xl italic font-extrabold text-center text-grey-normal">
                                Code Labs har en familjär känsla och ett stort driv som inspirerar mig till att
                                utvecklas.
                                Detta
                                är den perfekta kombon för mig.
                            </blockquote>
                            <p className="pt-4">
                                <cite className="text-left font-poppins text-2xl text-grey-normal">Mauricio Saez</cite>
                            </p>
                            <p>
                                <cite className="font-thin font-poppins text-2xl text-codelabs-primary1">DevOps
                                    Engineer</cite>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Testimonials;