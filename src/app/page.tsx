import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FilterableGallery from "./components/FilterableGallery";
import PhotoCredits from "./components/PhotoCredits";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Footer from './components/Footer';
import MockProjectPopup from "@/app/components/MockProjectPopup";

export default function Page() {
    return (
        <>
            <MockProjectPopup />
            <Hero />
            <About />
            <Services />
            <FilterableGallery />
            <PhotoCredits />
            <Reviews />
            <Contact />
            <WhatsAppFloatingButton />
            <Footer />
        </>
    );
}
