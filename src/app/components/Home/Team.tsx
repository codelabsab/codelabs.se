import Image from "next/image";
import React from "react";

const people = [
  {
    name: 'Honey Helensdotter',
    role: 'Business Developer',
    imageUrl: "assets/team/honey.jpeg",
    bio: '',
    github_url: `#`
  },
  {
    name: "Tommy Malmqvist",
    role: `Software Engineer`,
    bio: `Python Terraform Kubernetes CI/CD ArgoCD AWS GCP GKE Azure`,
    imageUrl: "assets/team/tommy.jpg",
    github_url: `https://github.com/tommymalmqvist`,
    linkedinUrl: "#",
  },
  {
    name: "Carl-Fredrik Arvidson",
    role: `Software Developer`,
    bio: `Javascript/Typescript React Node Python CI/CD`,
    imageUrl: "assets/team/cf.jpeg",
    github_url: `https://github.com/cfarvidson`,
    linkedinUrl: "#",
  },
  {
    name: "Kami Gerami",
    role: `DevOps Engineer`,
    bio: `Terraform Kubernetes Nomad Consul Helm Grafana DataDog Prometheus CI/CD AWS GCP GKE`,
    imageUrl: "assets/team/kami.jpeg",
    github_url: `https://github.com/kamigerami`,
    linkedinUrl: "#",
  },
  {
    name: "Mauricio Saez",
    role: `DevOps Engineer`,
    bio: ` Python Ansible Puppet Docker Openshift GCP AWS CI/CD Jenkins`,
    imageUrl: "assets/team/mauricio.jpeg",
    github_url: `https://github.com/marresgit`,
    linkedinUrl: "#",
  },
  {
    name: "Pär Berge",
    role: `DevOps Engineer`,
    bio: `Python Kubernetes Docker Terraform Grafana Prometheus AWS GCP Azure CI/CD ArgoCD`,
    imageUrl: "assets/team/paer.jpeg",
    github_url: `https://github.com/parberge`,
    linkedinUrl: "#",
  }
  // More people...
]

export default function Team() {
  return (
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl">Teamet</h2>
            <p className="mt-4 text-lg leading-8 text-slate-500">
              Vi är en dynamisk grupp individer som brinner för det vi gör
            </p>
          </div>
          <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
                <li key={person.name}>
                  <img className="mx-auto h-56 w-56 rounded-full" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-slate-600">{person.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    <li>
                      <a href={person.github_url} className="text-slate-400 hover:text-slate-600">
                        <span className="sr-only">Twitter</span>
                        <svg className={"h-5 w-5"} fill="currentColor" viewBox="0 0 20 20" version="1.1">
                          <g id="surface1">
                            <path
                                // style=" stroke:none;fill-rule:evenodd;fill:rgb(14.117647%,16.078431%,18.431373%);fill-opacity:1;"
                                d="M 9.96875 0 C 4.457031 0 0 4.355469 0 9.742188 C 0 14.046875 2.855469 17.691406 6.816406 18.980469 C 7.3125 19.078125 7.492188 18.773438 7.492188 18.515625 C 7.492188 18.289062 7.476562 17.515625 7.476562 16.707031 C 4.703125 17.289062 4.125 15.546875 4.125 15.546875 C 3.679688 14.417969 3.019531 14.128906 3.019531 14.128906 C 2.113281 13.53125 3.085938 13.53125 3.085938 13.53125 C 4.09375 13.59375 4.621094 14.53125 4.621094 14.53125 C 5.511719 16.015625 6.949219 15.59375 7.527344 15.335938 C 7.609375 14.707031 7.875 14.273438 8.15625 14.03125 C 5.941406 13.804688 3.613281 12.964844 3.613281 9.226562 C 3.613281 8.160156 4.011719 7.289062 4.636719 6.613281 C 4.539062 6.371094 4.191406 5.371094 4.738281 4.03125 C 4.738281 4.03125 5.578125 3.773438 7.476562 5.03125 C 8.289062 4.820312 9.128906 4.710938 9.96875 4.710938 C 10.8125 4.710938 11.671875 4.820312 12.460938 5.03125 C 14.359375 3.773438 15.203125 4.03125 15.203125 4.03125 C 15.746094 5.371094 15.402344 6.371094 15.300781 6.613281 C 15.945312 7.289062 16.324219 8.160156 16.324219 9.226562 C 16.324219 12.964844 13.996094 13.789062 11.769531 14.03125 C 12.132812 14.335938 12.445312 14.917969 12.445312 15.835938 C 12.445312 17.144531 12.429688 18.191406 12.429688 18.515625 C 12.429688 18.773438 12.613281 19.078125 13.105469 18.980469 C 17.066406 17.691406 19.925781 14.046875 19.925781 9.742188 C 19.941406 4.355469 15.46875 0 9.96875 0 Z M 9.96875 0 "/>
                          </g>
                        </svg>
                      </a>
                    </li>
                    {/*<li>*/}
                    {/*  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">*/}
                    {/*    <span className="sr-only">LinkedIn</span>*/}
                    {/*    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">*/}
                    {/*      <path*/}
                    {/*          fillRule="evenodd"*/}
                    {/*          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"*/}
                    {/*          clipRule="evenodd"*/}
                    {/*      />*/}
                    {/*    </svg>*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                  </ul>
                </li>
            ))}
          </ul>
        </div>
      </div>
  )
}
