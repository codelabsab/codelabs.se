import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ['latin'] })

const pillars = [
    {
        name: 'Platform Engineering',
        description: 'Building self-service platforms using Kubernetes (AKS/EKS/GKE), Rancher, and OpenShift. We empower your teams to deploy with confidence.',
    },
    {
        name: 'Infrastructure as Code',
        description: 'Moving clients from manual ops to fully automated Terraform/OpenTofu & Ansible workflows. GitOps as standard practice.',
    },
    {
        name: 'Cloud Migration',
        description: 'Architecting complex moves from On-Prem to Cloud, or AWS to Azure, with a focus on zero-downtime and security.',
    },
    {
        name: 'Modernization',
        description: 'Refactoring legacy systems and monoliths into scalable microservices or serverless functions.',
    },
];

export default function WhatWeDo() {
    return (
        <div className="mt-32 overflow-hidden sm:mt-40 py-12 pb-40 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h1 className={`text-5xl sm:text-7xl font-bold tracking-tight text-black ${montserrat.className}`}>
                            The Code Labs Standard
                        </h1>
                        <p className={`mt-6 text-2xl ${montserrat.className} font-medium text-black leading-relaxed`}>
                            We don&apos;t just fill seats. We modernize infrastructure.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {pillars.map((pillar) => (
                                <div key={pillar.name} className="bg-gray-50 rounded-xl p-6">
                                    <h3 className={`text-lg font-bold text-black ${montserrat.className}`}>{pillar.name}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                        <Image
                            src="/assets/aveqia.jpeg"
                            width={800}
                            height={600}
                            priority={true}
                            alt=""
                            className="aspect-7/5 w-148 max-w-screen flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>
                    <div className="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                        <Image
                            src="/assets/marre.jpeg"
                            width={800}
                            height={600}
                            priority={true}
                            alt=""
                            className="aspect-7/5 w-148 max-w-screen flex-none rounded-2xl bg-gray-50 object-cover"
                        />
                    </div>
                    <div className="lg:w-full lg:max-w-lg lg:pb-8">
                        <p className={`mt-6 text-2xl ${montserrat.className} font-medium text-black leading-relaxed`}>
                            Community, team, experiences and adventures is why our colleagues stay with us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
