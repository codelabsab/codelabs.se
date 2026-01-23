import React from "react";
import Link from "next/link";
import { Montserrat, Roboto } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
})

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})


const OmOss = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 relative z-10">
                <div className="max-w-4xl">
                    <h1 className={`text-6xl sm:text-8xl font-black tracking-tight text-black mb-8 ${montserrat.className}`}>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-codelabs-primary1 to-codelabs-primary2">
                            Architecting
                        </span>
                        <span>the Future.</span>
                        <br />
                        <span className="block mt-2">Empowering the Engineer.</span>
                    </h1>

                    <p className={`mt-8 text-2xl sm:text-3xl ${montserrat.className} font-medium text-gray-700 leading-relaxed max-w-3xl border-l-4 border-codelabs-primary2 pl-6`}>
                        Join Stockholm&apos;s premier DevOps consultancy. We build critical platforms for Sweden&apos;s biggest brands and invest our energy into a greener planet.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-start mt-16">
                        <Link href="/careers">
                            <button className={`group relative px-8 py-4 bg-black text-white text-xl font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl ${montserrat.className}`}>
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-codelabs-primary1 to-codelabs-primary2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    Join the Team
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                        <Link href="#war-stories">
                            <button className={`px-8 py-4 bg-white text-black border-2 border-black text-xl font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:shadow-xl ${montserrat.className}`}>
                                See Our Work
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </section>
    );
};

export default OmOss;
