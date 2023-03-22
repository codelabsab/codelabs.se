import React from "react";
import { teamData } from "./TeamData";
import Image from "next/image";
const CodeLabsTeam = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 md:px-1 md:py-56 py-24 ">
        <div className="flex w-full justify-center flex-wrap">
          {teamData.map((items, index) => {
            return (
              <div className="md:px-5 mb-12 border mx-4 py-12 shadow-lg" key={index}>
                <div className="flex px-7 w-80 flex-col items-center justify-center text-center  ">
                    <Image
                        className="w-36 rounded-full"
                        src={items.picture}
                        alt="github"
                        width={640}
                        height={480}
                        priority={true}
                    />

                  <h6 className="font-semibold text-base text-black-dark mb-1">
                    {items.name}
                  </h6>
                  <p className="font-normal text-sm mb-4 text-codelabs-primary1">
                    {items.designation}
                  </p>
                  <p className="font-normal text-sm text-black-dark mb-4">
                    {items.description}
                  </p>
                  <a href ={items.github_url} target="_blank" rel="noreferrer noopener">
                      <Image
                          className="w-6"
                          src="/assets/social/github.svg"
                          alt="github"
                          width={32}
                          height={24}
                          priority={true}
                      />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CodeLabsTeam;
