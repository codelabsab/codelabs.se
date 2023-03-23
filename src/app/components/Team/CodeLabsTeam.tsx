import React from "react";
import { teamData } from "./TeamData";
import Image from "next/image";
import Link from "next/link";
const CodeLabsTeam = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 md:px-1 ">
        <div className="w-full justify-center grid md:grid-cols-2 grid-cols-1">
          {teamData.map((items, index) => {
            return (
              <div className="md:px-5 mb-12 border mx-4 py-6 shadow-lg" key={index}>
                <div className="w-80 mx-auto px-auto flex flex-col justify-center h-full">
                    <Image
                        className="w-36 rounded-full mx-auto"
                        src={items.picture}
                        alt="github"
                        width={640}
                        height={480}
                        priority={true}
                    />

                  <h6 className="font-semibold text-base text-black-dark mb-1 mx-auto">
                    {items.name}
                  </h6>
                  <p className="font-normal text-sm mb-4 text-codelabs-primary1 mx-auto">
                    {items.designation}
                  </p>
                  <p className="font-normal text-sm text-black-dark mb-4 flex justify-center">
                    {items.description}
                  </p>
                  <Link href ={items.github_url} target="_blank" rel="noreferrer noopener" className={"flex justify-center h-full items-end"}>
                      <Image
                          className="w-6"
                          src="/assets/social/github.svg"
                          alt="github"
                          width={32}
                          height={24}
                          priority={true}
                      />
                  </Link>
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
