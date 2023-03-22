import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className="w-full bg-white karriar-bg object-cover">
                <div className="max-w-6xl mx-auto ">
                    <div className="">
                        <div
                            className="bg-white max-w-lg px-10 md:pt-11 pb-11 pt-10 md:block hidden relative -bottom-20 shadow-lg">
                            <h1 className=" text-grey-bluish md:text-5xl text-3xl pb-4 font-bold md:text-left text-center">
                                Väx med <span className="text-codelabs-primary1">oss</span>
                            </h1>
                            <p className="text-base text-grey-dark font-normal md:text-left text-center mb-10">
                                Vill du också hjälpa ambitiösa företag med systemutveckling, molntjänster, infrastruktur
                                eller personligen utvecklas inom nya områden tillsammans med likasinnade kollegor?
                            </p>
                            <Link
                                href="/team/"
                                className="bg-codelabs-primary2 font-poppins font-medium px-4 text-white w-36 pt-2 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary1 hover:text-white hover:shadow-xl transform transition duration-100 hover:scale-110"
                            >
                                Träffa teamet
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full px-10 md:pt-11 pb-11 pt-10 md:hidden block">
                <h1 className=" text-grey-bluish md:text-5xl text-3xl pb-4 font-bold md:text-left text-center">
                    Väx med oss
                </h1>
                <p className="text-base text-grey-dark font-normal md:text-left text-center mb-10">
                    Om du vill hjälpa ambitiösa företag med systemutveckling, molntjänster, infrastruktur
                    eller personligen utvecklas inom nya områden tillsammans med likasinnade kollegor.
                </p>
                <Link href="/karriar/"
                      className=" bg-grey-blue text-white px-4 py-2.5 cursor-pointer rounded-full transition-all hover:shadow-xl">
                    Träffa teamet
                </Link>
            </div>
        </>
    );
};

export default Header;
