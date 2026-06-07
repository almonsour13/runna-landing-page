import Footer from "@/shared/components/layout/Footer";
import Header from "@/shared/components/layout/Header";
import AppPreview from "@/shared/components/sections/AppPreview";
import Download from "@/shared/components/sections/Download";
import FAQ from "@/shared/components/sections/FAQ";
import Features from "@/shared/components/sections/Features";
import Hero from "@/shared/components/sections/Hero";
import HowItWorks from "@/shared/components/sections/HowItWorks";
import Stats from "@/shared/components/sections/Stats";
import { Column } from "@/shared/components/ui/Column";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-1">
            <Column className="flex-1 gap-20">
                <Header />
                <Hero />
                <Features />
                <HowItWorks />
                <AppPreview />
                <Stats />
                <Download />
                <FAQ />
                <Footer />
            </Column>
        </div>
    );
}
