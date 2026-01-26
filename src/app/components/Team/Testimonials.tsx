import Paer from "../../../../public/assets/team/paer2.jpeg";
import Mauricio from "../../../../public/assets/team/mauricio.jpeg";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] });

const Testimonials = () => {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1 px-4">
                        <div className="text-codelabs-primary3 text-6xl font-serif leading-none mb-4 opacity-50">&ldquo;</div>
                        <blockquote className={`text-2xl font-bold text-gray-900 leading-relaxed ${montserrat.className}`}>
                            Pär is a valued colleague who has been with us since the start. He likes tech,
                            writing code and biking down steep hills.
                        </blockquote>
                        <div className="mt-6">
                            <cite className={`block text-lg font-semibold text-gray-900 not-italic ${montserrat.className}`}>Pär Berge</cite>
                            <span className={`block text-sm text-codelabs-primary1 font-medium ${montserrat.className}`}>DevOps Engineer</span>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                        <Image
                            src={Paer}
                            alt={"Pär"}
                            fill
                            className="object-cover"
                            priority={true}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="h-[400px] relative rounded-3xl overflow-hidden shadow-2xl -skew-y-3 hover:skew-y-0 transition-transform duration-500">
                        <Image
                            src={Mauricio}
                            alt={"Mauricio"}
                            fill
                            className="object-cover"
                            priority={true}
                        />
                    </div>
                    <div className="px-4">
                        <div className="text-codelabs-primary3 text-6xl font-serif leading-none mb-4 opacity-50">&ldquo;</div>
                        <blockquote className={`text-2xl font-bold text-gray-900 leading-relaxed ${montserrat.className}`}>
                            Code Labs has a great team vibe and a great drive that inspires.
                            This is the perfect combination for me.
                        </blockquote>
                        <div className="mt-6">
                            <cite className={`block text-lg font-semibold text-gray-900 not-italic ${montserrat.className}`}>Mauricio Saez</cite>
                            <span className={`block text-sm text-codelabs-primary1 font-medium ${montserrat.className}`}>DevOps Engineer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
