import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-codelabs-primary5 pb-8 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto my-auto">
        <div className="pb-12"></div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between pl-24 pr-24">
          {/* snabblänkar */}
          <div className="flex flex-col justify-center md:justify-center px-3 py-3 col-3">
            <div className="col-12">
                <h2 className="text-l font-poppins font-medium pb-4 dark:text-slate-400">
                  Snabblänkar
                </h2>
            </div>
            <div className="col-12 font-poppins font-normal text-sm hover:font-semibold dark:text-slate-500">
              <a
                  href="https://codelabs.se/karriar/"
              >Karriär</a>
            </div>
            <div className="col-12 font-poppins font-normal text-sm hover:font-semibold dark:text-slate-500">
              <a
                  href="https://codelabs.se/team/"
              >Team</a>
            </div>
            <div className="col-12 font-poppins font-normal text-sm hover:font-semibold dark:text-slate-500">
              <a
                  href="https://codelabs.se/kunder/"
              >Kundcase</a>
            </div>
            <div className="col-12 font-poppins font-normal text-sm hover:font-semibold dark:text-slate-500">
              <a
                  href="https://codelabs.se/blogs/"
              >Blogg</a>
            </div>
          </div>

          {/* följ oss */}
          <div className="flex flex-col px-3 py-3 col-3">
            <div className="col-12">
              <h2 className="font-poppins font-medium pb-4 dark:text-slate-400">
                Följ oss på
              </h2>
            </div>
            <div className="col-12">
              <ul className="flex">
                <li>
                  <a
                      href="https://www.linkedin.com/company/code-labs-ab/"
                      target="_blank"
                      rel="noreferrer noopener"
                  >
                    <Image
                        src="/assets/social/linkedin.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        priority={true}
                        className="w-5 h-5 dark:text-slate-500"
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
                        src="/assets/social/instagram.svg"
                        alt="Instagram"
                        width={20}
                        height={20}
                        priority={true}
                        className="w-5 h-5 dark:text-slate-500"
                    />
                  </a>
                </li>
                <li>
                  <a
                      href="https://github.com/codelabsab/"
                      target="_blank"
                      rel="noreferrer noopener"
                  >
                    <Image
                        src="/assets/social/github.svg"
                        alt="Instagram"
                        width={20}
                        height={20}
                        priority={true}
                        className="w-5 h-5 dark:text-slate-500"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* kontakta oss */}
          <div className="flex flex-col px-3 py-3 col-3">
            <div className="col-12">
              <h2 className="text-l font-poppins font-medium pb-4 dark:text-slate-400">
                Kontakta oss
              </h2>
            </div>
            <div className="col-12 font-poppins font-normal text-sm dark:text-slate-500">
              Tel: 08 - 128 164 00
            </div>
          </div>


          {/* jobba hos oss */}
          <div className="flex flex-col px-3 py-3 col-3">
            <div className="col-12">
              <h2 className="text-l font-poppins font-medium pb-4 dark:text-slate-400">
                Jobba hos oss
              </h2>
            </div>
            <div className="col-12 font-poppins font-normal text-sm hover:font-semibold dark:text-slate-500">
              <a
                  href="https://codelabs.se/karriar/"
                  rel="noreferrer noopener"
              >Karriär</a>
            </div>
            <div className="col-12 font-poppins font-normal text-sm hover:font-semibold dark:text-slate-500">
              <a
                  href="https://codelabs.se/karriar/"
                  rel="noreferrer noopener"
              >Lediga tjänster</a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between">
            {/*left*/}
            <div className="col-4"></div>
            {/* mid */}
            <div className="flex flex-col justify-center md:justify-center px-3 py-3 col-4 divide-y divide-purple-400 dark:divide-slate-400">
              <div className="col-4"></div>
              <div className="col-8 pt-4">
                <div className="flex flex-col justify-center">
                  <div className="col-12 text-center pb-4">
                    <p className="font-poppins font-light text-sm dark:text-slate-500">Code Labs AB</p>
                    <p className="font-poppins font-light text-sm dark:text-slate-500">Org.nr: 559064-2442</p>
                    {/*<p className="font-poppins font-light">Integritetspolicy</p>*/}
                  </div>
                  <div className="mx-auto">
                    <Link href="/" >
                      <Image
                          className="w-28"
                          src="/assets/logo/codelabs.svg"
                          alt="codelabs"
                          width={640}
                          height={480}
                          priority={true}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* right*/}
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
