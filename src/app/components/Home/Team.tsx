import {people} from "@/app/components/Data/TeamData";
import Image from "next/image";

export default function TeamHome() {
  return (
      <div className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl">Teamet</h2>
            <p className="mt-4 text-lg leading-8 text-slate-500">
                En sammansvetsad grupp som gillar att ha kul tillsammans
            </p>
          </div>
          <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
                <li key={person.name}>
                  <Image
                      className="mx-auto h-56 w-56 rounded-full"
                      src={`/${person.imageUrl}`}
                      alt={person.name}
                      width={224}
                      height={224}
                      priority={true}
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-slate-600">{person.name}</h3>
                  <p className="text-sm leading-6 text-gray-600">{person.role}</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    <li>
                      <a href={person.github_url} className="text-slate-400 hover:text-slate-600">
                        <span className="sr-only">Twitter</span>
                        <svg className={"h-5 w-5"} fill="currentColor" viewBox="0 0 20 20" version="1.1">
                          <g id="surface1">
                            <path
                                d="M 9.96875 0 C 4.457031 0 0 4.355469 0 9.742188 C 0 14.046875 2.855469 17.691406 6.816406 18.980469 C 7.3125 19.078125 7.492188 18.773438 7.492188 18.515625 C 7.492188 18.289062 7.476562 17.515625 7.476562 16.707031 C 4.703125 17.289062 4.125 15.546875 4.125 15.546875 C 3.679688 14.417969 3.019531 14.128906 3.019531 14.128906 C 2.113281 13.53125 3.085938 13.53125 3.085938 13.53125 C 4.09375 13.59375 4.621094 14.53125 4.621094 14.53125 C 5.511719 16.015625 6.949219 15.59375 7.527344 15.335938 C 7.609375 14.707031 7.875 14.273438 8.15625 14.03125 C 5.941406 13.804688 3.613281 12.964844 3.613281 9.226562 C 3.613281 8.160156 4.011719 7.289062 4.636719 6.613281 C 4.539062 6.371094 4.191406 5.371094 4.738281 4.03125 C 4.738281 4.03125 5.578125 3.773438 7.476562 5.03125 C 8.289062 4.820312 9.128906 4.710938 9.96875 4.710938 C 10.8125 4.710938 11.671875 4.820312 12.460938 5.03125 C 14.359375 3.773438 15.203125 4.03125 15.203125 4.03125 C 15.746094 5.371094 15.402344 6.371094 15.300781 6.613281 C 15.945312 7.289062 16.324219 8.160156 16.324219 9.226562 C 16.324219 12.964844 13.996094 13.789062 11.769531 14.03125 C 12.132812 14.335938 12.445312 14.917969 12.445312 15.835938 C 12.445312 17.144531 12.429688 18.191406 12.429688 18.515625 C 12.429688 18.773438 12.613281 19.078125 13.105469 18.980469 C 17.066406 17.691406 19.925781 14.046875 19.925781 9.742188 C 19.941406 4.355469 15.46875 0 9.96875 0 Z M 9.96875 0 "/>
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
            ))}
          </ul>
        </div>
      </div>
  )
}