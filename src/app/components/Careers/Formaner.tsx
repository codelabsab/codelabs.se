//
import formansData from "./FormansData";
import Image from "next/image";
const Formaner = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto flex lg:pb-28 pb-8 justify-center items-center flex-col">
        <div className="mb-4 mt-28">
          <h2 className="font-title md:pb-20 xs:pb-12 font-black text-black-dark text-center md:text-left text-4xl md:text-6xl">Benefits</h2>
        </div>
        <div className="flex text-center flex-wrap">
          {formansData.map((data) => {
            return (
              <div key={`${data.title}-${data.image}`} className="border-b-2 border-r-2 border-l-2 border-separate border-blue-lightest px-12 pb-5 pt-5 lg:w-1/3 md:w-2/4 w-full flex flex-col items-center">
                  <Image
                      className="mb-4 h-12 w-12"
                      src={`${data.image}`}
                      alt={data.title}
                      width={224}
                      height={224}
                      priority={true}
                  />
                <h5 className="font-title font-semibold text-2xl mb-2">{data.title}</h5>
                <p className="text-center px-4">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Formaner;
