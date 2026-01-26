import { ChatBubbleLeftRightIcon, LightBulbIcon, UserGroupIcon, DocumentCheckIcon, AcademicCapIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import Image from "next/image";

const cards = [
    {
        name: 'Hello',
        description: 'Informal chat with our recruiter Angelica – a chemistry check to discuss values and what you\'re looking for.',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Vision',
        description: 'Tech talk with the Founders. We discuss engineering leadership and your technical ambitions.',
        icon: LightBulbIcon,
    },
    {
        name: 'Tribe',
        description: 'Meet your future colleagues – the "vibe check". Transparency is key at Code Labs.',
        icon: UserGroupIcon,
    },
    {
        name: 'Promise',
        description: 'Contract & Offer. We commit to you before we have the assignment. Your stability is our priority.',
        icon: DocumentCheckIcon,
    },
    {
        name: 'Growth',
        description: 'Upskilling & Certification. Missing a specific skill? We train you on our dime before you start.',
        icon: AcademicCapIcon,
        highlight: true,
    },
    {
        name: 'Impact',
        description: 'Deployment to your new assignment. Time to make a difference at one of Sweden\'s leading companies.',
        icon: RocketLaunchIcon,
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
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">How We Hire</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        A transparent, human-centric process. We commit to you before we have the assignment.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-6">
                    {cards.map((card, index) => (
                        <div key={card.name} className={`relative flex gap-x-4 rounded-xl p-6 ring-1 ring-inset transition-all duration-300 hover:shadow-lg ${card.highlight ? 'bg-indigo-600/20 ring-indigo-400/30' : 'bg-white/5 ring-white/10 hover:bg-white/10'}`}>
                            {/* Step Number Background */}
                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 shadow-md">
                                <span className={`text-sm font-bold ${card.highlight ? 'text-indigo-400' : 'text-gray-500'}`}>
                                    0{index + 1}
                                </span>
                            </div>

                            <card.icon className={`h-7 w-5 flex-none ${card.highlight ? 'text-indigo-300' : 'text-indigo-400'}`} aria-hidden="true" />
                            <div className="text-base leading-7">
                                <h3 className={`font-semibold font-poppins ${card.highlight ? 'text-indigo-200' : 'text-white'}`}>{card.name}</h3>
                                <p className="mt-2 text-gray-300 font-poppins">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
