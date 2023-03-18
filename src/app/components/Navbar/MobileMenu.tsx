'use client';
import React from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import Link from "next/link";
import Image from "next/image";
const MobileMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false);



    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <div>
            <div className="bg-white flex justify-between py-5 px-4 shadow-lg">
                <div className="flex self-center">
                    <Link href="/" >
                        <Image
                            className="w-28"
                            src="/logo/codelabs.svg"
                            alt="codelabs"
                            width={640}
                            height={480}
                            priority={true}
                        />
                    </Link>
                </div>
                <span onClick={toggleDrawer}>
          <Image
              src="/icons/hamburger.svg"
              alt="Menu"
              width={20}
              height={20}
              priority={true}
              className="w-8 h-8 cursor-pointer"
          />
        </span>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                customIdSuffix={"mobile-menu"}
                size={300}
                style={{backgroundColor: "#565656"}}
            >
                <div className="flex justify-center pt-10 pb-14">
                    <Link href="/" >
                        <Image
                            className="w-28"
                            src="/logo/codelabs_white.svg"
                            alt="codelabs"
                            width={640}
                            height={480}
                            priority={true}
                        />
                    </Link>
                </div>
                <ul className="flex flex-col justify-center pb-10">
                    <li className=" py-2 flex justify-center ">
                        <Link
                            href="/karriar/"
                            className="font-normal text-xl text-center text-white hover:text-white hover:font-bold"
                        >
                            Karriär
                        </Link>
                    </li>
                    <li className="py-2 flex justify-center">
                        <Link
                            href="/team/"
                            className="font-normal text-xl text-center text-white hover:text-white hover:font-bold"
                        >
                            Team
                        </Link>
                    </li>
                    <li className="py-2 flex justify-center">
                        <Link
                            href="/blogg"
                            className="font-normal text-xl text-center text-white hover:text-white hover:font-bold"
                        >
                            Blogg
                        </Link>
                    </li>
                </ul>
                <div className=" flex justify-center md:justify-end md:pt-1.5">
                    <ul className="flex">
                        <li className="px-3">
                            <a
                                href="https://www.linkedin.com/company/code-labs-ab/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                     src="/social/linkedin.svg"
                                     alt="LinkedIn"
                                     width={20}
                                     height={20}
                                     priority={true}
                                     className="w-4 h-4 text-white"
                                 />
                            </a>
                        </li>
                        <li className="px-3">
                            <a
                                href="https://www.instagram.com/codelabsab/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    src="/social/instagram.svg"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                    priority={true}
                                    className="w-4 h-4 text-white"
                                />
                            </a>
                        </li>
                        <li className="px-3">
                            <a
                                href="https://github.com/codelabsab/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    src="/social/github-2.svg"
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                    priority={true}
                                    className="w-4 h-4 text-white"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default MobileMenu;
