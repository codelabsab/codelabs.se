import Intro from "@/app/components/Intro/Intro";
import Kunder from "@/app/components/Home/Kunder";
import {BlogInlagg} from "@/app/components/Home/SenasteInlagg";
import Script from "next/script";
import VideoWithOverlay from "@/app/components/Home/VideoOverlay";
import WhatWeDo from "@/app/components/Team/WhatWeDo";
import Tjanster from "@/app/components/Karriar/Tjanster";

export default function Home() {
    return (
        <main>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-HZZ215K6CG"></Script>
            <Script
                id="ganalytics"
                dangerouslySetInnerHTML={{
                    __html: `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HZZ215K6CG');
    `,
                }}
            />
            <VideoWithOverlay/>
            <Intro/>
            <WhatWeDo/>
            <Kunder/>
            <BlogInlagg/>
        </main>
    );
}
