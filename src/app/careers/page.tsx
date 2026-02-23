import Tjanster from "@/app/components/Careers/Tjanster";
import Header from "@/app/components/Careers/Header";
import SalaryCalculator from "@/app/components/Careers/SalaryCalculator";
import { BlogInlagg } from "@/app/components/Home/SenasteInlagg";

export default function Career() {
    return (
        <main>
            <Tjanster />
            <Header />
            <SalaryCalculator />
            <BlogInlagg />
        </main>
    )
}
