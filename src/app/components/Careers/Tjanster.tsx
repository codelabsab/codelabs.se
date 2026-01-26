import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import getPostMetadata from "@/app/components/Blog/getPostMetadata";

const montserrat = Montserrat({ subsets: ['latin'] });

const stats = [
    { label: 'Founded', value: '2016' },
    { label: 'Employees', value: '8' },
]

const values = [
    {
        name: 'Attitude',
        description: 'With a positive attitude, we create a good work environment. We are humble and responsive.',
        emoji: '🙌',
    },
    {
        name: 'Community',
        description: 'It should feel natural to share our knowledge and experiences.',
        emoji: '🤝',
    },
    {
        name: 'Innovation',
        description: 'We are curious and want to learn more. We encourage creative and innovative thinking.',
        emoji: '💡',
    },
    {
        name: 'Uplifting',
        description: 'We support each other with learning, development and curiosity.',
        emoji: '🚀',
    },
    {
        name: 'Openness',
        description: 'We have a low threshold and strive for straightforward communication.',
        emoji: '💬',
    },
    {
        name: 'Recovery',
        description: 'We take time for recovery and make sure to take care of ourselves.',
        emoji: '🧘',
    },
]

export default function Tjanster() {
    const posts = getPostMetadata().slice(0, 2);

    return (
        <section className="bg-white relative overflow-hidden">
            {/* Mission Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                    />
                </div>

                <div className="mx-auto max-w-7xl py-24 sm:py-32">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <h1 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 ${montserrat.className}`}>
                                Mission & Vision
                            </h1>
                            <div className="h-1 w-20 bg-codelabs-primary2 mb-10" />
                            <div className={`space-y-6 text-xl leading-8 text-gray-600 ${montserrat.className} font-light`}>
                                <p>
                                    Our mission is to create an environment where we challenge and encourage
                                    each other to think creatively. We believe a culture representing innovation,
                                    education, and inspiration is key to growth.
                                </p>
                                <p>
                                    We focus on developing products that solve real problems. We believe
                                    innovative solutions come from combining our diverse competencies
                                    and experiences.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 flex flex-col justify-between h-full bg-gray-50 rounded-3xl p-10 lg:p-14">
                            <div className="grid grid-cols-2 gap-8">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <dt className="text-sm font-semibold leading-6 text-gray-600 uppercase tracking-widest">{stat.label}</dt>
                                        <dd className={`order-first text-5xl font-semibold tracking-tight text-gray-900 ${montserrat.className}`}>{stat.value}</dd>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-gray-500 italic">
                                &ldquo;Creating a place where we can develop together and be ourselves.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery / Life Section */}
            <div className="py-24 sm:py-32 bg-gray-900 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${montserrat.className}`}>
                            Life at Code Labs
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Work hard, have fun, and grow together. Read our stories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                        {/* Large Main Image */}
                        <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
                            <Image src="/assets/entourage.jpeg" alt="Team Entourage" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-6 left-6">
                                <h3 className={`text-2xl font-bold text-white ${montserrat.className}`}>Code Days & Hackathons</h3>
                            </div>
                        </div>

                        {/* Blog Post 1 */}
                        {posts[0] && (
                            <div className="relative rounded-2xl overflow-hidden group bg-gray-800 hover:ring-2 hover:ring-codelabs-primary2 transition-all">
                                <Link href={`/blog/${posts[0].slug}`} className="block h-full w-full">
                                    <Image src={posts[0].og_image} alt={posts[0].title} fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <span className="text-xs font-bold text-codelabs-primary2 mb-2 uppercase tracking-widest">Latest Story</span>
                                        <h4 className={`text-lg font-bold text-white leading-tight line-clamp-3 ${montserrat.className}`}>{posts[0].title}</h4>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* Blog Post 2 */}
                        {posts[1] && (
                            <div className="relative rounded-2xl overflow-hidden group bg-gray-800 hover:ring-2 hover:ring-codelabs-primary2 transition-all">
                                <Link href={`/blog/${posts[1].slug}`} className="block h-full w-full">
                                    <Image src={posts[1].og_image} alt={posts[1].title} fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                        <span className="text-xs font-bold text-codelabs-primary2 mb-2 uppercase tracking-widest">Team Story</span>
                                        <h4 className={`text-lg font-bold text-white leading-tight line-clamp-3 ${montserrat.className}`}>{posts[1].title}</h4>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* Video Tile */}
                        <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
                            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100">
                                <source src="/assets/video/rally.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end items-end">
                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className={`text-base font-semibold leading-7 text-codelabs-primary2 uppercase tracking-widest ${montserrat.className}`}>Culture</h2>
                    <p className={`mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${montserrat.className}`}>
                        Our Core Values
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name} className="flex flex-col items-start bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="text-4xl mb-4">{value.emoji}</div>
                                <dt className={`text-xl font-semibold leading-7 text-gray-900 ${montserrat.className}`}>
                                    {value.name}
                                </dt>
                                <dd className="mt-4 flex-auto text-base leading-7 text-gray-600">
                                    {value.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-24 flex justify-center">
                    <Link href="mailto:application@codelabs.se">
                        <button className={`bg-black text-white px-10 py-5 rounded-full text-xl font-bold transition-transform hover:scale-105 hover:bg-codelabs-primary2 shadow-xl ${montserrat.className}`}>
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
