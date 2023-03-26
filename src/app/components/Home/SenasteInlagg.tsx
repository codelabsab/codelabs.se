import React from "react";
import Link from "next/link";
import getPostMetadata from "@/app/components/Blogg/getPostMetadata";
import Image from "next/image";

// const SenasteInlagg = () => {
//
//     const posts = getPostMetadata();
//
//     return (
//         <div className="w-full bg-gradient-to-b from-white via-white to-codelabs-primary5 w-full">
//             <div className="max-w-7xl mx-auto  pt-10 pb-10">
//                 <div className="w-full flex items-center justify-center mb-10">
//                     <h1
//                         className="font-title font-poppins font-bold text-black-gray text-3xl md:text-5xl text-center md:text-left mb-4 pb-10"
//                     >
//                         Senaste inlägg från bloggen
//                     </h1>
//                 </div>
//                 <div
//                     className="flex overflow-x-scroll pb-10 hide-scroll-bar"
//                 >
//                     {posts.map((post) => {
//                         return (
//                             <div className={"flex flex-nowrap"} key={post.slug}>
//                                 <div className="mx-auto my-6 blog-cards">
//                                     <Link href={`/blogg/${post.slug}`}>
//                                         <div
//                                             className="bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 mx-6">
//                                             <div className="h-72 w-80">
//                                                 <Image
//                                                     src={post.og_image} alt={post.slug}
//                                                     width={640}
//                                                     height={320}
//                                                     className={"rounded-t-lg w-full object-cover h-72"}
//                                                 />
//                                             </div>
//                                             <div className="px-6 flex flex-col h-52 w-80">
//                                                 <p className="font-poppins font-light pt-2 pb-2 text-sm text-codelabs-primary1">
//                                                     {post.date}
//                                                 </p>
//                                                 <h4 className="font-title pb-8 font-semibold text-2xl truncate text-grey-normal ">
//                                                     {post.title}
//                                                 </h4>
//                                                 <p className="font-title font-normal text-base pb-4 overflow-clip h-full">
//                                                     {post.description}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SenasteInlagg;

export function BlogInlagg() {
    const posts = getPostMetadata().slice(0, 3);
    return (
        <div className="bg-white py-24 sm:py-32 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Senaste inlägg från bloggen</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Följ Code Labs äventyr på och utanför arbetsplatsen.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transform transition-all hover:scale-105 relative hover:shadow-2xl"
                        >
                            <Image
                                className="absolute inset-0 -z-10 h-full w-full object-cover"
                                src={`${post.og_image}`}
                                alt={post.slug}
                                width={224}
                                height={224}
                                priority={true}
                            />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={post.date} className="mr-8">
                                    {post.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <Image
                                            src={`/assets/team/${post.author.split(' ')[0].toLowerCase()}.jpeg`}
                                            width={24}
                                            height={24}
                                            priority={true}
                                            alt=""
                                            className="h-6 w-6 flex-none rounded-full bg-white/10" />
                                        {post.author}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <Link href={`/blogg/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}