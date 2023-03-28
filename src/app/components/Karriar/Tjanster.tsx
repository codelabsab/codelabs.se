import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Splash1, Splash2} from "@/app/components/Graphics/Splash";

const stats = [
    {label: 'Timmar hos fantastiska kunder', value: '5000+'},
    {label: 'Besparing till våra kunder', value: '190 milj SEK'},
    {label: 'Nya Tesla bilar', value: '5'},
]
const values = [
    {
        name: 'Inställning',
        description:
            'Med en positiv inställning till livet och till varandra skapar vi en bra arbetsmiljö. Vi är ödmjuka och lyhörda för att kunna utvecklas tillsammans.',
    },
    {
        name: 'Gemenskap',
        description:
            'Vi delar med oss av våra kunskaper och erfarenheter för att utvecklas tillsammans. Både på och utanför jobbet.',
    },
    {
        name: 'Innovation och kreativitet',
        description:
            'Vi är nyfikna och vill alltid lära oss mer. Vi uppmuntrar varandras kreativitet och nytänkande i arbetet.',
    },
    {
        name: 'Var stöttande',
        description:
            'Vi stöttar varandra och i vardagen, på uppdragen, med lärande och utveckling.',
    },
    {
        name: 'Ta ansvar',
        description:
            'Vi tar ansvar för våra egna val och för våra egna resultat.',
    },
    {
        name: 'Återhämtning',
        description:
            'Vi tar oss tid för återhämtning och tar hand om oss själva.',
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
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="mx-auto">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
                                        Innovation och kreativitet.
                                    </h1>
                                    <div className="hidden md:block h-56 relative">
                                        <Splash1/>
                                    </div>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-600  sm:max-w-md lg:max-w-none">
                                        Vi strävar efter att vara det mest innovativa och kreativa konsultbolaget på
                                        marknaden, med en arbetsmiljö som uppmuntrar till idéutbyte, nytänkande och
                                        kontinuerlig förbättring. Genom att locka till oss de mest kreativa och
                                        innovativa talangerna och genom att erbjuda utbildning och resurser för att
                                        utveckla våra medarbetares kreativa förmågor, kommer vi att fortsätta att vara
                                        en pålitlig partner för våra kunder och en ledande röst inom konsultbranschen.
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
                                                    src="/assets/grill.mp4"
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
                                                    src="/assets/waterfall.mp4"
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
                                                    src="/assets/rally.mp4"
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
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Mission
                                &
                                Vision</h2>
                            <Image
                                className="h-52 "
                                src={"/assets/paint/misc-2.svg"}
                                alt={""}
                                width={224}
                                height={224}
                                priority={true}
                            />
                        </div>
                        <div className="h-20">
                            <Splash2/>
                        </div>
                        <div className="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-xl leading-8 text-gray-600 ">
                                    Vår mission och vision är att skapa en arbetsplats som stödjer och främjar
                                    nytänkande och kreativitet, både internt och för våra kunder. Genom att ha en kultur
                                    som värdesätter innovation och kreativitet och genom att erbjuda utbildning och
                                    resurser för att utveckla våra medarbetares förmågor, kan vi erbjuda högkvalitativa
                                    lösningar som hjälper våra kunder att uppnå sina affärsmål.
                                </p>
                                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 ">
                                    <p>
                                        Att vara en innovativ och kreativ partner som hjälper våra kunder att lösa sina
                                        mest utmanande problem. Genom att främja en kultur av nytänkande och kreativitet
                                        i allt vi gör, levererar vi högkvalitativa lösningar som hjälper våra kunder att
                                        uppnå sina affärsmål och förbli konkurrenskraftiga på marknaden. Vi tror att en
                                        rolig och inspirerande arbetsmiljö, med regelbundna events, hjälper oss
                                        att stimulera vår kreativitet och skapa nya lösningar.
                                    </p>
                                    <p className="mt-10 ">
                                        Vi strävar efter att vara det mest innovativa och kreativa konsultbolaget på
                                        marknaden, med en arbetsmiljö som uppmuntrar till idéutbyte, nytänkande och
                                        kontinuerlig förbättring. Genom att locka till oss de mest kreativa och
                                        innovativa talangerna och genom att erbjuda utbildning och resurser för att
                                        utveckla våra medarbetares kreativa förmågor, kommer vi att fortsätta att vara
                                        en pålitlig partner för våra kunder och en ledande röst inom konsultbranschen.
                                        Vi tror att genom att ha en rolig och inspirerande arbetsmiljö, med regelbundna
                                        spontana events, kan vi stimulera vår kreativitet och skapa nya lösningar för
                                        våra kunder.
                                    </p>
                                </div>
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
                    <img
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt=""
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div className="flex items-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Våra
                                kärnvärden</h2>
                            <Image
                                className="h-32 text-codelabs-primary1"
                                src={"/assets/paint/arrow-12.svg"}
                                alt={"arrow"}
                                width={224}
                                height={224}
                            />
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600 ">
                            Att skapa en inkluderande, balanserad, kreativ, socialt ansvarstagande och
                            utvecklingsorienterad arbetsplats är viktiga kärnvärden för ett konsultbolag som vill locka
                            till sig och behålla de bästa talangerna.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name}>
                                <dt className="font-semibold text-gray-900 ">{value.name}</dt>
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
                    <h1 className="md:text-7xl text-5xl font-extrabold">Redo att ansöka?</h1>
                </div>
                <div className={"flex justify-center py-4"}>
                    <div className="flex justify-center md:justify-start py-12">
                        <Link
                            href="mailto:contact@codelabs.se"
                        >
                            <button
                                className="bg-codelabs-primary2 font-poppins font-medium px-4 text-white w-52 h-20 pt-2 pb-2 justify-center rounded flex items-center transition-all hover:bg-codelabs-primary5 hover:text-codelabs-primary2 hover:shadow-xl transform transition duration-100 hover:scale-110">
                                Maila oss
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
