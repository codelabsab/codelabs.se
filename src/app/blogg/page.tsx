import { Inter } from 'next/font/google'
import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/components/Hero/Hero";
import Footer from "@/app/components/Footer/Footer";
import Intro from "@/app/components/Intro/Intro";
import { getSortedPostsData } from '../../lib/posts';
import Link from "next/link";
import Blogg from "@/app/components/Blog/Blog";

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
    return (
        <main>
            <Navbar />
            <Blogg />
            <Footer />
        </main>
    )
}