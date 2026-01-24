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
        <section id="success-stories" className="bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-codelabs-primary1/10 rounded-full blur-3xl opacity-20 mix-blend-screen" />
                <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-codelabs-primary2/10 rounded-full blur-3xl opacity-20 mix-blend-screen" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className={`text-4xl font-bold tracking-tight text-white sm:text-6xl ${montserrat.className}`}>
                        Success Stories
                    </h2>
                    <p className={`mt-6 text-lg leading-8 text-gray-300 ${montserrat.className} max-w-2xl`}>
                        Real projects. Real impact. See how we&apos;ve helped Sweden&apos;s biggest brands modernize their infrastructure.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {caseStudies.map((study) => (
                        <article
                            key={study.title}
                            className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-2xl hover:shadow-codelabs-primary1/10 group"
                        >
                            <div>
                                <div className="flex items-center gap-x-4 mb-6">
                                    <div className="p-2 rounded-lg bg-codelabs-primary1/10 group-hover:bg-codelabs-primary1/20 transition-colors">
                                        <study.icon className="h-8 w-8 text-codelabs-primary3" />
                                    </div>
                                    <span className={`text-sm font-semibold text-codelabs-primary3 tracking-wide uppercase ${montserrat.className}`}>
                                        {study.title}
                                    </span>
                                </div>
                                <h3 className={`mt-4 text-xl font-bold leading-tight text-white group-hover:text-codelabs-primary4 transition-colors ${montserrat.className}`}>
                                    {study.headline}
                                </h3>
                                <p className="mt-4 text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {study.description}
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                {study.focus.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/20 transition-colors group-hover:bg-indigo-500/20 group-hover:text-indigo-200"
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
