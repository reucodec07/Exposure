import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export default function Page() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Reviews />
            <Contact />
            <WhatsAppFloatingButton />
        </>
    );
}
