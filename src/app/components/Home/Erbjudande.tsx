import React from "react";
import Link from "next/link";
import Image from "next/image";
const Erbjudande = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto flex lg:pb-60 pb-20 justify-center items-center flex-col">
        <div className="mb-16  mt-28">
          <h2 className="font-title font-poppins font-bold text-slate-600 text-3xl md:text-5xl text-center md:text-left mb-2">Code Labs erbjuder</h2>
        </div>
        <div className="flex text-center flex-wrap">
          <div className="px-12 pb-5 lg:w-1/3 md:w-2/4 w-full flex flex-col items-center">
            <Image
                className="mb-4 h-12"
                src="https://img.icons8.com/material-rounded/48/000000/teamwork.png"
                alt="teamwork"
                width={64}
                height={48}
                priority={true}
            />
            <h5 className="font-poppins font-semibold text-2xl mb-2">Team</h5>
            <p className="text-center font-poppins font-light md:text-left px-4">
              Arbeta med ett tight team med stor gemenskap, hög kompetens och som älskar att umgås och hitta på saker tillsammans.
            </p>
          </div>
          <div className="px-12 pb-5 lg:w-1/3 md:w-2/4 w-full flex flex-col items-center">
            <Image
                className="mb-4 h-12"
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-code-coding-kiranshastry-solid-kiranshastry-2.png"
                alt="cash-benifits"
                width={64}
                height={48}
                priority={true}
            />
            <h5 className="font-poppins font-semibold text-2xl mb-2">Äventyr</h5>
            <p className="text-center font-poppins font-light md:text-left px-4">
              Livet på Code Labs är mer än bara jobb. Vi har många aktiviteter tillsammans, både på jobbet och utanför.
            </p>
          </div>
          <div className=" px-12 pb-5 lg:w-1/3 md:w-2/4 w-full flex flex-col items-center ">
            <Image
                className="mb-4 h-12"
                src="https://img.icons8.com/ios-filled/50/000000/medical-doctor.png"
                alt="healthcare"
                width={64}
                height={48}
                priority={true}
            />
            <h5 className="font-title font-semibold text-2xl mb-2">Utveckling</h5>
            <p className="text-center font-poppins font-light md:text-left px-4">
              Tillsammans utvecklas vi och våra kunder. Vi har en stark kultur av att lära av varandra och dela med sig av kunskap.
            </p>
          </div>
        </div>
        <div className=" pt-20 flex flex-col md:flex-row justify-between px-4 ">
          <div className="lg:w-3/4 w-full mb-6 flex justify-center flex-col">
            <p className="font-poppins font-semibold text-center md:text-left text-base">
              Vill du bli en del av teamet?
            </p>
            <p className="font-title text-sm text-center md:text-left font-poppins">Se tjänster vi söker.</p>
          </div>
          <div className=" lg:w-3/12 px-6  w-full">
            <Link href="/karriar"
              className="bg-grey-light2 font-title text-base font-medium px-4 text-grey-bluish border border-black-gray w-40 pt-1 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-white hover:text-black hover:shadow-xl transform transition duration-100 hover:scale-110"
            >
              Lediga tjänster
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erbjudande;
