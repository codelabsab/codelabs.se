
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/app/components/Navbar/MobileMenu";

const Navbar = () => {
    return (
        <div>
            <div className="block md:hidden">
                <MobileMenu />
            </div>

            <div className="hidden md:block left-0 right-0 bg-white z-50 ">
                <div className="max-w-6xl  mx-auto py-4 flex justify-between">
                    <div className="w-1/3 sm:ml-8 xl:ml-0">
                        <Link href="/">
                            <Image
                                className="w-28"
                                src="/assets/logo/codelabs.svg"
                                width={640}
                                height={640}
                                priority={true}
                                alt="Code Labs Logo"
                            />
                        </Link>
                    </div>
                    <div className="w-1/3 flex px-4 justify-end">
                        <ul className="flex ">
                            <li className=" px-6">
                                <Link
                                    href="/careers/"
                                    className="font-normal font-poppins text-base hover:font-medium "
                                >
                                    Careers
                                </Link>
                            </li>
                            <li className="px-6">
                                <Link
                                    href="/team/"
                                    className="font-normal font-poppins text-base hover:font-medium "
                                >
                                    Team
                                </Link>
                            </li>
                            <li className="px-6">
                                <Link
                                    href="/blog"
                                    className="font-normal font-poppins text-base hover:font-medium "
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
