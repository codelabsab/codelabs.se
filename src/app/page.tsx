import Hero from "@/app/components/Home/Hero";
import Intro from "@/app/components/Intro/Intro";
import Erbjudande from "@/app/components/Home/Erbjudande";
import Kunder from "@/app/components/Home/Kunder";
import SenasteInlagg from "@/app/components/Home/SenasteInlagg";
import Team from "@/app/components/Home/Team";

export default function Home() {
    return (
        <main>
            <Hero/>
            <Intro/>
            <Team/>
            <Erbjudande/>
            <Kunder />
            <SenasteInlagg />
        </main>
    )
}