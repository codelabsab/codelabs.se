import {people} from "@/app/components/Data/TeamData";
import React from "react";
import {Roboto} from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    weight: ['100','300','400', '500', '700', '900'],
    subsets: ['latin']
})

export default function TeamTestimonials() {
    return (
        <div className="bg-codelabs-tertiary5 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl sm:text-center">
                    <h1 className={`text-5xl sm:text-8xl font-bold tracking-tight text-black ${roboto.className}`}>Vi som jobbar på Code Labs.</h1>
                    <p className={`mt-6 text-3xl ${roboto.className} font-extralight text-gray-600`}>
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
                            <Image
                                src={person.imageUrl}
                                width={400}
                                height={400}
                                priority={true}
                                className="w-52 flex-none rounded-2xl object-cover"
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
