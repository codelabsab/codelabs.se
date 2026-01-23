import Intro from "@/app/components/Intro/Intro";
import Kunder from "@/app/components/Home/Kunder";
import { BlogInlagg } from "@/app/components/Home/SenasteInlagg";
import VideoWithOverlay from "@/app/components/Home/VideoOverlay";
import WhatWeDo from "@/app/components/Team/WhatWeDo";
import WarStories from "@/app/components/Home/WarStories";

export default function Home() {
    return (
        <main>
            <VideoWithOverlay />
            <Intro />
            <WhatWeDo />
            <WarStories />
            <Kunder />
            <BlogInlagg />

        </main>
    );
}
