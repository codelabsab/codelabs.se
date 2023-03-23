import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <div className="w-full h-502 bg-gradient-to-b from-white via-white pt-12 to-codelabs-primary5">
                <div className="flex flex-col md:flex-row justify-center md:justify-between max-w-5xl xl:pl-48 py-6">
                    <div className="col-8">
                        <div
                            className="px-10 md:block">
                            <h1 className="text-grey-bluish font-poppins text-6xl pb-4 font-bold text-left">
                                Träffa <span className="text-codelabs-primary1">teamet</span>
                            </h1>
                            <p className="text-base text-grey-dark font-poppins pb-5">
                                Träffa våra superstjärnor. Vi är ett gäng engagerade kollegor
                                och vänner som älskar att skriva kod och snacka tech. Oroa dig
                                inte för vi älskar att kavla upp ärmen och få jobb gjort också!
                            </p>
                            <p className="font-poppins text-base text-grey-dark mb-10 ">
                                Intresserad av att joina vårt team?
                            </p>
                            <Link
                                href="/karriar/"
                                className="bg-codelabs-primary2 font-poppins font-medium px-4 text-white w-36 pt-2 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary1 hover:text-white hover:shadow-xl transform transition duration-100 hover:scale-110"
                            >
                                Bli en av oss
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
