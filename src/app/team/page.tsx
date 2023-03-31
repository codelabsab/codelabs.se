import Header from "@/app/components/Team/Header";
import React from "react";
import Team from "@/app/components/Team/Team";
import Testimonials from "@/app/components/Team/Testimonials";
import WhatWeDo from "@/app/components/Team/WhatWeDo";

export default function TeamPage() {
    return (
        <main className="bg-white ">
            <Header />
            <Testimonials />
            <Team />
        </main>
    )
}
