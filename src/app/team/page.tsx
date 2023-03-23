import Header from "@/app/components/Team/Header";
import CodeLabsTeam from "@/app/components/Team/CodeLabsTeam";
import {Divider} from "@/app/components/Team/Divider";
import React from "react";

export default function Team() {
    return (
        <main>
            <Header />
            <Divider />
            <CodeLabsTeam />
        </main>
    )
}
