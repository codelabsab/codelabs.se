import React from "react";
import { KarriarData } from "./KarriarData";

const Tjanster = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-1">
            <h1 className="text-center sm:pt-12 pt-7 pb-16 text-3xl font-bold text-black-darkest">
                Lediga tjänster
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-28">
                {KarriarData.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white border card-shadow border-grey-lightest px-10 py-10"
                        >
                            <h1 className=" text-grey-dark text-3xl pb-4 font-bold">
                                {data.title}
                            </h1>
                            <p className="text-base text-grey-normal font-normal pb-12">
                                {data.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Tjanster;