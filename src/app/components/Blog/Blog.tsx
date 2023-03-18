import React from "react";
import {use} from "react";

import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

import {getSortedPostsData} from '../../../lib/posts';
import Link from "next/link";
import Image from "next/image";

export default function Blogg() {
    const sortedBlogPosts = use(getSortedPostsData())
    return (
        <>
            <div className="w-full">
                <div
                    className="mb-10 bg-white max-w-lg px-10 md:pt-11 pb-11 pt-10 md:block hidden relative -bottom-20 shadow-lg">
                    <h1 className=" text-grey-bluish md:text-5xl text-3xl pb-4 font-bold md:text-left text-center">
                        Code Labs <span className="text-codelabs-primary1">bloggen</span>
                    </h1>
                    <p className="text-base text-grey-dark font-normal pb-5">
                        Här skriver vi om allt mellan himmel och jord!
                        Teknik, aktiviteter som vi gör tillsammans, ideer vi har och andra nyheter!
                    </p>
                </div>
                <div className="w-full bg-white">
                    <div className="max-w-6xl mx-auto ">
                        <div className="absolute -bottom-2">
                        </div>
                    </div>
                </div>
                <div className="mb-10 bg-white w-full px-10 md:pt-11 pb-11 pt-10 md:hidden block">
                    <h1 className=" text-grey-bluish text-5xl pb-4 font-bold text-center">
                        Code Labs <span className="text-codelabs-primary1">bloggen</span>
                    </h1>
                    <p className="text-base text-grey-dark font-normal md:text-left text-center">
                        Här skriver vi om allt mellan himmel och jord!
                        Teknik, aktiviteter som vi gör tillsammans, ideer vi har och andra nyheter!
                    </p>
                </div>
                <div className="max-w-6xl mx-auto py-28">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                        {sortedBlogPosts?.map(post =>
                            <div
                                className="px-6 md:px-3 mb-44 z-10 h-96 md:h-702 transform transition-all hover:scale-105  relative"
                                key={`${post.slug}`}>
                                <Link href={`/blogg/${post.data.slug}`} key={`${post.slug}`}>
                                    <div className=" md:max-w-392 bg-white  shadow-lg rounded-lg min-h-500">
                                        <Image
                                            src={`/blogg/${post.post}/${post.data.og_image}`}
                                            alt={post.slug}
                                            width={500}
                                            height={300}
                                            priority={true}
                                        />
                                    </div>
                                    <div className="px-6 flex flex-col">
                                        <p className="font-poppins font-light pt-4 pb-3 text-codelabs-primary1">
                                            {post.data.date}
                                        </p>
                                        <h4 className="font-title pb-2 font-semibold text-2xl truncate text-grey-normal ">
                                            {post.data.title}
                                        </h4>
                                        <p className="font-title font-normal text-base pb-6 textTruncate">{post.data.description}</p>
                                        <div className='relative'>
                                            <div className="absolute bottom-4 right-0">
                                                <Link href={`/blogs/${post.slug}`}>
                                                    <div className="flex justify-end">
                                                        <Link
                                                            href={`/blogs/${post.slug}`}
                                                            className="sm:px-4 py-1.5 cursor-pointer px-7 pt-1 pb-1 mb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary5"
                                                        >
                                                        </Link>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}