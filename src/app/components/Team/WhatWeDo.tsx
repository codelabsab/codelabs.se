import { Montserrat } from "next/font/google";
import Image from "next/image";
import { ServerStackIcon, CommandLineIcon, CloudArrowUpIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const montserrat = Montserrat({ subsets: ['latin'] })

const pillars = [
    {
        name: 'Platform Engineering',
        description: 'Building self-service platforms using Kubernetes (AKS/EKS/GKE), Rancher, and OpenShift. We empower your teams to deploy with confidence.',
        icon: ServerStackIcon,
    },
    {
        name: 'Infrastructure as Code',
        description: 'Moving clients from manual ops to fully automated Terraform/OpenTofu & Ansible workflows. GitOps as standard practice.',
        icon: CommandLineIcon,
    },
    {
        name: 'Cloud Migration',
        description: 'Architecting complex moves from On-Prem to Cloud, or AWS to Azure, with a focus on zero-downtime and security.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Modernization',
        description: 'Refactoring legacy systems and monoliths into scalable microservices or serverless functions.',
        icon: ArrowPathIcon,
    },
];

export default function WhatWeDo() {
    return (
        <section className="relative overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl font-bold tracking-tight text-black sm:text-5xl ${montserrat.className}`}>
                            The Code Labs Standard
                        </h2>
                        <p className={`mt-6 text-lg leading-8 text-gray-600 ${montserrat.className} max-w-2xl mx-auto`}>
                            We don&apos;t just fill seats. We modernize infrastructure with a proven technical approach.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-between gap-10">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {pillars.map((pillar) => (
                                    <div key={pillar.name} className="relative group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 group-hover:bg-codelabs-primary2 transition-colors duration-300 mb-6">
                                            <pillar.icon className="h-6 w-6 text-codelabs-primary2 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h3 className={`text-lg font-bold text-gray-900 ${montserrat.className}`}>
                                            {pillar.name}
                                        </h3>
                                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="relative rounded-3xl bg-gray-900 p-8 sm:p-10 min-h-[300px] flex items-end overflow-hidden group shadow-lg">
                                <Image
                                    src="/assets/aveqia.jpeg"
                                    alt="Code Labs team at Aveqia"
                                    fill
                                    className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20" />
                                <div className="relative z-10 p-2">
                                    <blockquote className={`text-xl font-medium leading-relaxed text-white ${montserrat.className}`}>
                                        <p>
                                            &ldquo;Community, team, experiences and adventures is why our colleagues stay with us.&rdquo;
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl bg-gray-100 min-h-[400px] lg:min-h-full group shadow-lg">
                            <Image
                                src="/assets/marre.jpeg"
                                alt="Code Labs culture"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                <p className={`text-lg font-bold ${montserrat.className}`}>Join our journey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
