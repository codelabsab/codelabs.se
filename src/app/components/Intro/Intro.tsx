import React from "react";
import Link from "next/link";
import Image from "next/image";

const OmOss = () => {
    return (
        <div>
            <div className="bg-gradient-to-t from-white via-white to-codelabs-primary5">
                <div>
                    <div
                        className="flex md:flex-row flex-col mx-auto py-24 px-0 justify-center items-center max-w-7xl relative">
                        <div className="px-4 md:w-2/4 z-10">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Ännu ett konsultbolag?
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none ">
                                Nej! Vi är ett <b>team</b> där kreativitet, samarbete och glädje är i fokus. Vi har en
                                avslappnad företagskultur som uppmuntrar till öppen kommunikation och kreativt tänkande.
                                Vi tror att en glad och motiverad personal är nyckeln till att leverera resultat för
                                våra kunder.
                            </p>
                            <div className="flex justify-center md:justify-start py-12 z-10">
                                <Link
                                    href="/team/"
                                >
                                    <button
                                        className="bg-codelabs-primary2 font-poppins font-medium px-4 text-white w-36 pt-2 pb-2 justify-center rounded flex items-center transition-all hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110">Träffa
                                        Teamet
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 z-20">
                            <Image
                                className="w-auto"
                                src="/assets/ipad.svg"
                                width={1080}
                                height={1040}
                                priority={true}
                                alt="Code Labs iPad"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OmOss;
