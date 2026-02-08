'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Help from "@/components/Help";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import FadeIn from "@/components/FadeIn";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <FadeIn>
                <PartnerLogos />
            </FadeIn>
            <FadeIn>
                <Products />
            </FadeIn>
            <FadeIn>
                <Services />
            </FadeIn>
            <FadeIn>
                <Help />
            </FadeIn>
            <FadeIn>
                <FAQ />
            </FadeIn>
            <FadeIn>
                <Testimonials />
            </FadeIn>
            <FadeIn>
                <Contact />
            </FadeIn>
            <Footer />
        </main>
    );
}
