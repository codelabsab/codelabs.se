import Hero from "@/app/components/Home/Hero";
import Intro from "@/app/components/Intro/Intro";
import Erbjudande from "@/app/components/Home/Erbjudande";
import Kunder from "@/app/components/Home/Kunder";
import { BlogInlagg } from "@/app/components/Home/SenasteInlagg";
import Team from "@/app/components/Home/Team";
import Script from "next/script";

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

      <Hero />
      <Intro />
      <Team />
      <Erbjudande />
      <Kunder />
      <BlogInlagg />
    </main>
  );
}
