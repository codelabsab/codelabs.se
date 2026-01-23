import { Montserrat } from "next/font/google";
import { ServerStackIcon, CloudArrowUpIcon, BoltIcon } from '@heroicons/react/24/outline';

const montserrat = Montserrat({ subsets: ['latin'] });

const caseStudies = [
    {
        title: 'The Scale-Up',
        headline: 'Migrating 700+ developers to GitHub Actions & AKS',
        description: 'Transformed a major Swedish retailer\'s development workflow by implementing GitHub Actions across 700+ developers. Built a scalable AKS platform with GitOps principles, reducing deployment times and increasing developer autonomy.',
        focus: ['Scale', 'GitOps', 'Automation'],
        icon: ServerStackIcon,
    },
    {
        title: 'The Cloud Hop',
        headline: 'Strategic migration from AWS to Azure for a global gaming giant',
        description: 'Architected and executed a complex cloud migration for a globally recognized gaming company. Implemented Terraform-based infrastructure, established robust CI/CD pipelines, and ensured zero-downtime during the transition.',
        focus: ['Terraform', 'Pipelines', 'Resilience'],
        icon: CloudArrowUpIcon,
    },
    {
        title: 'The Modernizer',
        headline: 'From 17 seconds to 1 second – Fullstack optimization',
        description: 'Dramatically improved performance for a public sector application. Through modern tech stack adoption and architecture optimization, we reduced response times by over 94%, transforming user experience.',
        focus: ['Performance', 'Modern Tech Stack'],
        icon: BoltIcon,
    },
];

export default function WarStories() {
    return (
        <section id="war-stories" className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className={`text-4xl font-bold tracking-tight text-white sm:text-6xl ${montserrat.className}`}>
                        War Stories
                    </h2>
                    <p className={`mt-6 text-lg leading-8 text-gray-300 ${montserrat.className}`}>
                        Real projects. Real impact. See how we&apos;ve helped Sweden&apos;s biggest brands modernize their infrastructure.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {caseStudies.map((study) => (
                        <article
                            key={study.title}
                            className="flex flex-col bg-white/5 rounded-2xl p-8 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-x-4">
                                <study.icon className="h-10 w-10 text-indigo-400" />
                                <span className={`text-sm font-medium text-indigo-400 ${montserrat.className}`}>
                                    {study.title}
                                </span>
                            </div>
                            <h3 className={`mt-6 text-xl font-bold leading-7 text-white ${montserrat.className}`}>
                                {study.headline}
                            </h3>
                            <p className="mt-4 flex-auto text-base leading-7 text-gray-300">
                                {study.description}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {study.focus.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
