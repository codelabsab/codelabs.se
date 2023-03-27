import {people} from "@/app/components/Data/TeamData";
import Image from "next/image";
import React from "react";

export default function TeamTestimonials() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Vi som jobbar på Code Labs.</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Ett härligt team av individer som alla har olika bakgrunder och kompetenser. Med vår
                        sammansvetsade teamkänsla så skapar vi magic.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {people.map((person) => (
                        <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                            <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl}
                                 alt=""/>
                            <div className="flex-auto">
                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-base leading-7 text-gray-400">{person.role}</p>
                                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
