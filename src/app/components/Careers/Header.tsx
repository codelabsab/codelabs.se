import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from "next/image";

const cards = [
    {
        name: 'Interview',
        description: 'Have a conversation with our fantastic recruiter, Honey, and get answers to all your questions.',
        icon: PhoneIcon,
    },
    {
        name: 'Technical Interview',
        description: 'Show your skills and get a chance to ask us questions.',
        icon: LifebuoyIcon,
    },
    {
        name: 'Offer',
        description: 'Woohoo! You got an offer from us. Let\'s go!',
        icon: NewspaperIcon,
    },
]

export default function Header() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <Image
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt={""}
                width={224}
                height={224}
                priority={true}
            />

            <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-274.25"
            >
                <path
                    fill="url(#7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1)"
                    fillOpacity=".2"
                    d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                    <linearGradient
                        id="7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1"
                        x1="1097.04"
                        x2="-141.165"
                        y1=".22"
                        y2="363.075"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#776FFF" />
                        <stop offset={1} stopColor="#FF4694" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                viewBox="0 0 1097 845"
                aria-hidden="true"
                className="absolute left-1/2 -top-52 -z-10 w-274.25 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <path
                    fill="url(#49c00522-612e-41d3-bb32-ce7d1fa28850)"
                    fillOpacity=".2"
                    d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
                />
                <defs>
                    <linearGradient
                        id="49c00522-612e-41d3-bb32-ce7d1fa28850"
                        x1="1097.04"
                        x2="-141.165"
                        y1=".22"
                        y2="363.075"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#776FFF" />
                        <stop offset={1} stopColor="#FF4694" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Careers</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Your career at Code Labs
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                    {cards.map((card) => (
                        <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                            <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
                            <div className="text-base leading-7">
                                <h3 className="font-semibold font-poppins text-white">{card.name}</h3>
                                <p className="mt-2 text-gray-300 font-poppins">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
