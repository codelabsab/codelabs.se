import React from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
    {label: 'Start', value: '2016'},
    {label: 'Antal anställda', value: '6'},
]
const values = [
    {
        name: 'Inställning',
        description:
            'Med en positiv inställning skapar vi en bra arbetsmiljö. Vi är ödmjuka och lyhörda.',
    },
    {
        name: 'Gemenskap',
        description:
            'Det ska kännas naturligt att dela med oss av våra kunskaper och erfarenheter.',
    },
    {
        name: 'Innovation och kreativitet',
        description:
            'Vi är nyfikna och vill lära oss mer. Vi uppmuntrar varandras kreativitet och nytänkande i arbetet.',
    },
    {
        name: 'Upplyftande',
        description:
            'Vi stöttar varandra med lärande, utveckling och nyfikenhet.',
    },
    {
        name: 'Öppen kommunikation',
        description:
            'Vi har lågt i tak och strävar efter att ha rak kommunikation med våra kollegor.',
    },
    {
        name: 'Återhämtning',
        description:
            'Vi tar oss tid för återhämtning och ser till att ta hand om oss själva.',
    },
]

export default function Tjanster() {
    return (
        <div className="bg-white ">
            {/* Header */}
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-codelabs-primary5 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-codelabs-primary5 ">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0}
                              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"/>
                    </svg>
                    <div
                        className="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
                        <svg viewBox="0 0 801 1036" aria-hidden="true" className="w-[50.0625rem]">
                            <path
                                fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
                                fillOpacity=".3"
                                d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
                            />
                            <defs>
                                <linearGradient
                                    id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                                    x1="508.179"
                                    x2="-28.677"
                                    y1="-116.221"
                                    y2="1091.63"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC"/>
                                    <stop offset={1} stopColor="#8B00FF"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    {/*<div className="w-full absolute -z-10 overflow-hidden blur-sm">*/}
                        {/*<Splash1/>*/}
                    {/*</div>*/}
                    <div className="overflow-hidden relative">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="mx-auto">
                                    <h1 className="text-5xl font-bold tracking-tight text-black sm:text-8xl">
                                        What a teeeaaam
                                    </h1>
                                    <Image
                                        className="h-16"
                                        src={"/assets/paint/arrow-15.svg"}
                                        alt={"arrow"}
                                        width={224}
                                        height={224}
                                    />
                                    <p className="relative mt-6 text-2xl leading-8 text-gray-600  sm:max-w-md lg:max-w-none">
                                        Code Labs är plats där du kan utvecklas, utmanas och arbeta med ett team av duktiga
                                        människor.
                                    </p>
                                    <p className="relative mt-6 text-2xl leading-8 text-gray-600  sm:max-w-md lg:max-w-none">
                                        Som en del av vårt team kommer du att att få intressanta och
                                        utmanande projekt som hjälper dig att växa både personligt och professionellt.
                                    </p>
                                    <p className="relative mt-6 text-2xl leading-8 text-gray-600  sm:max-w-md lg:max-w-none">
                                        Samtidigt som du arbetar med att nå dina mål, kommer du
                                        att njuta av roliga upplevelser dina kollegor – allt från att jobba tillsammans
                                        på vårt kontor och
                                        teambuilding-aktiviteter till gemensamma luncher och Code Labs by-events och
                                        resor.
                                    </p>
                                </div>
                                <div
                                    className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div
                                        className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <Image
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                src={"/assets/team/paer.jpeg"}
                                                alt={""}
                                                width={224}
                                                height={224}
                                                priority={true}
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <Image
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                src={"/assets/bg-career.jpeg"}
                                                alt={""}
                                                width={224}
                                                height={224}
                                                priority={true}
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                        <div className="relative">
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            >
                                                <source
                                                    src="/assets/video/grill.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            >
                                                <source
                                                    src="/assets/video/waterfall.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                        <div className="relative">
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            >
                                                <source
                                                    src="/assets/video/rally.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="flex items-center">
                            <h1 className="text-5xl font-bold tracking-tight text-black sm:text-8xl ">Mission
                                &
                                Vision</h1>
                            <Image
                                className="h-32 "
                                src={"/assets/paint/misc-2.svg"}
                                alt={""}
                                width={224}
                                height={224}
                                priority={true}
                            />
                        </div>
                        {/*<div*/}
                        {/*    className="absolute inset-x-0 -z-10 h-[64rem] w-full stroke-codelabs-primary5 overflow-hidden blur-sm">*/}
                        {/*    <Splash4/>*/}
                        {/*</div>*/}
                        <div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="relative mt-6 text-2xl leading-8 text-gray-600  sm:max-w-md lg:max-w-none">
                                    Vår mission och vision är att skapa en miljö där vi utmanar och uppmanar
                                    varandra till nytänkande och kreativitet.
                                    Genom att ha en kultur som värdesätter innovation och kreativitet och genom att
                                    erbjuda utbildning, resurser och genom att inspirera varandra att utvecklas så är vi
                                    övertygade om att vi skapar en bra kultur.
                                </p>
                                <p className="relative mt-6 text-2xl leading-8 text-gray-600  sm:max-w-md lg:max-w-none">
                                    Vi har ett fokus på att utveckla egna produkter och tjänster som vi tror kan
                                    vara användbara för både oss själva och våra kunder. Vi har en stark tro på att vi
                                    kan skapa innovativa lösningar genom att kombinera våra olika kompetenser och
                                    erfarenheter och det är väldigt kul att jobba ihop med så många duktiga människor.
                                </p>
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                            <dt className="text-base leading-7 text-gray-600 ">{stat.label}</dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-900 ">{stat.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center max-w-5xl">
                    <Image
                        className="h-28 mt-20"
                        src={"/assets/paint/misc-5.svg"}
                        alt={""}
                        width={224}
                        height={224}
                        priority={true}
                    />

                </div>

                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <Image
                        src="/assets/entourage.jpeg"
                        width={2832}
                        height={1880}
                        priority={true}
                        alt=""
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div className="flex items-center">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl ">
                                Kärnvärden
                            </h2>
                            <Image
                                className="text-codelabs-primary1 h-32"
                                src={"/assets/paint/arrow-12.svg"}
                                alt={"arrow"}
                                width={224}
                                height={224}
                            />
                        </div>
                        <p className="relative mt-6 text-2xl leading-8 text-gray-600  sm:max-w-md lg:max-w-none">
                            Att skapa en plats där vi kan utvecklas tillsammans och där vi kan vara oss själva.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name} className={``}>
                                <dt className="font-bold text-gray-900 ">{value.name}</dt>
                                <dd className="mt-1 text-gray-600">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                    <Image
                        className="mx-auto w-full h-16 mt-24"
                        src={"/assets/paint/line-4.svg"}
                        alt={""}
                        width={224}
                        height={224}
                        priority={true}
                    />
                </div>
                <div className={"flex justify-center py-24"}>
                    <h1 className="md:text-7xl text-4xl font-extrabold">Redo att ansöka?</h1>
                </div>
                <div className={"flex justify-center py-4 mx-auto"}>
                    <div className="flex justify-center md:justify-start py-12">
                        <Link
                            href="mailto:application@codelabs.se"
                        >
                            <button
                                className="bg-codelabs-primary2 font-poppins font-medium px-4 text-white w-52 h-20 pt-2 pb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110">
                                Yes, jag är redo!
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
