import { people } from "@/app/components/Data/TeamData";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from 'next/link';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin']
})


export default function TeamTestimonials() {
    return (
        <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <svg className="h-full w-full bg-codelabs-tertiary5" aria-hidden="true">
                    <defs>
                        <pattern id="team-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" className="text-codelabs-primary2/20" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#team-pattern)" />
                </svg>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <h2 className={`text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl ${montserrat.className}`}>
                        Meet the Makers
                    </h2>
                    <p className={`mt-6 text-xl leading-8 text-gray-600 ${montserrat.className} font-light`}>
                        A wonderful team of individuals who all have different backgrounds and skills.
                        With our cohesive team spirit, we create magic.
                    </p>
                </div>

                <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:gap-x-12">
                    {people.map((person) => (
                        <li key={person.name} className="group relative perspective-1000">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <Image
                                    src={person.imageUrl}
                                    alt={person.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                    <h3 className={`text-2xl font-bold leading-tight ${montserrat.className}`}>
                                        {person.name}
                                    </h3>
                                    <p className="text-sm font-medium text-codelabs-primary2 uppercase tracking-wider mb-4">
                                        {person.role}
                                    </p>

                                    <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-sm leading-relaxed text-gray-200 line-clamp-4 mb-6">
                                            {person.bio}
                                        </p>

                                        {person.github_url && (
                                            <Link href={person.github_url} target="_blank" className="inline-flex items-center gap-2 text-white hover:text-codelabs-primary2 transition-colors">
                                                <span className="sr-only">GitHub</span>
                                                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.943 0-1.091.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.597 1.028 2.688 0 3.848-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                </svg>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
