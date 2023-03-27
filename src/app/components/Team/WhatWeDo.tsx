export default function WhatWeDo() {
    return (
        <div className="mt-32 overflow-hidden sm:mt-40 py-12 pb-40 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Vad vi gör.</h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            Förutom att leverera resultat till våra fantastiska kunder så har vi även ett
                            stort social behov. Vi gillar att synka, ses och umgås. Att hitta på saker tillsammans
                            är en stor del av vår kultur.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Livet ska vara roligt tycker vi, ett äventyr. Det innebär att vi gillar
                            spännande upplevelser tillsammans med teamet.
                            Roliga resor, god mat och spännande events är bara några av de saker vi gillar.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                src="/assets/middag.jpeg"
                                alt=""
                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                        <div
                            className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img
                                    src="/assets/entourage.jpeg"
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img
                                    src="/assets/aveqia.jpeg"
                                    alt=""
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    src="/assets/marre.jpeg"
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}