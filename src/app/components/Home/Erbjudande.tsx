//
import Link from "next/link";
import Image from "next/image";
const Erbjudande = () => {
  return (
    <div className="bg-white ">
      <div className="max-w-5xl mx-auto flex lg:pb-60 pb-20 justify-center items-center flex-col">
        <div className="mb-16  mt-28">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Code Labs offers</h1>
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
            <p className="text-center font-poppins font-light md:text-left px-4 ">
              Work with a tight-knit team with strong community, high competence, and a love for hanging out and doing things together.
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
            <h5 className="font-poppins font-semibold text-2xl mb-2 ">Adventures</h5>
            <p className="text-center font-poppins font-light md:text-left px-4 ">
              Life at Code Labs is more than just work. We have many activities together, both at work and outside.
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
            <h5 className="font-title font-semibold text-2xl mb-2 ">Development</h5>
            <p className="text-center font-poppins font-light md:text-left px-4 ">
              Together we develop ourselves and our customers. We have a strong culture of learning from each other and sharing knowledge.
            </p>
          </div>
        </div>
        <div className=" pt-20 flex flex-col md:flex-row justify-between px-4 ">
          <div className="lg:w-3/4 w-full mb-6 flex justify-center flex-col">
            <p className="text-lg leading-8 text-gray-600 ">
              Want to be part of the team?
            </p>
            <p className="font-title text-sm text-center md:text-left font-poppins ">See the roles we are hiring for.</p>
          </div>
          <div className=" lg:w-3/12 px-6  w-full">
            <Link href="/careers"
            >
              <button type="button" className="bg-codelabs-primary2 font-poppins font-medium px-4 text-white w-36 pt-2 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110 ">Open positions</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erbjudande;
