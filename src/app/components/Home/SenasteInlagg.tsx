import React from "react";
import Link from "next/link";
import {Arrow} from "../Icons/Arrow";
import getPostMetadata from "@/app/components/Blogg/getPostMetadata";
import Image from "next/image";

const SenasteInlagg = () => {

    const posts = getPostMetadata();

    return (
        <div className="w-full bg-gradient-to-b from-white via-white to-codelabs-primary5 w-full">
            <div className="max-w-7xl mx-auto  pt-10 pb-10">
                <div className="w-full flex items-center justify-center mb-10">
                    <h1
                        className="font-title font-poppins font-bold text-black-gray text-3xl md:text-5xl text-center md:text-left mb-4 pb-10"
                    >
                        Senaste inlägg från bloggen
                    </h1>
                </div>
                <div
                    className="flex overflow-x-scroll pb-10 hide-scroll-bar"
                >
                    {posts.map((post) => {
                        return (
                            <div className={"flex flex-nowrap"} key={post.slug}>
                                <div className="mx-auto my-6 px-4 blog-cards">
                                    <Link href={`/blogs/${post.slug}`}>
                                        <div className="bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 mx-6">
                                            <div className="h-72 w-80">
                                                <Image
                                                    src={post.og_image} alt={post.slug}
                                                    width={640}
                                                    height={320}
                                                    className={"rounded-t-lg w-full object-cover h-72"}
                                                />
                                            </div>
                                            <div className="px-6 flex flex-col h-52 w-80">
                                                <p className="font-poppins font-light pt-2 pb-2 text-sm text-codelabs-primary1">
                                                    {post.date}
                                                </p>
                                                <h4 className="font-title pb-4 font-semibold text-2xl truncate text-grey-normal ">
                                                    {post.title}
                                                </h4>
                                                <p className="font-title font-normal text-base pb-4 overflow-clip h-full">
                                                    {post.description}
                                                </p>
                                                <div className="flex justify-end place-items-end h-full">
                                                    <Link href={`/blogs/${post.slug}`}>
                                                        <div className="flex justify-end">
                                                            <a
                                                                href="/"
                                                                className="sm:px-4 py-1.5 cursor-pointer hover:shadow-lg px-7 pt-1 pb-1 mb-2 justify-center rounded-full flex items-center transition-all hover:bg-codelabs-primary5">
                                                                <Arrow/>
                                                            </a>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
    ;

    export default SenasteInlagg;

