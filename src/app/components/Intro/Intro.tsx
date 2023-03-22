import React from "react";
import Link from "next/link";
import Image from "next/image";
const OmOss = () => {
    return (
        <div>
            <div className="bg-cl-primary">
                <div>
                    <div className="flex md:flex-row flex-col mx-auto py-24 px-0 justify-center items-center max-w-5xl">
                        <div className="px-4 md:w-2/4">
                            <h2 className="font-title font-poppins font-bold text-black-gray text-3xl md:text-5xl text-center md:text-left mb-2">
                                Ännu ett konsultbolag?
                            </h2>
                            <p className="font-title font-poppins font-normal text-black-gray text-center md:text-left mb-8">
                                Nej! Vi är ett <b>team</b> där kreativitet, samarbete och glädje är i fokus. Vi har en avslappnad företagskultur som uppmuntrar till öppen kommunikation och kreativt tänkande. Vi tror att en glad och motiverad personal är nyckeln till att leverera högkvalitativa resultat för våra kunder.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <Link
                                    href="/team/"
                                    className="bg-grey-light2 font-title text-base font-medium px-4 text-grey-bluish border border-black-gray w-40 pt-1 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-cl-primary hover:text-black hover:shadow-xl transform transition duration-100 hover:scale-110"
                                >
                                    Träffa teamet
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                className="w-100"
                                src="/assets/ipad.svg"
                                width={1280}
                                height={1280}
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
