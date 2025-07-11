import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Services from "./components/Services";
import FilterableGallery from "./components/FilterableGallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Footer from './components/Footer';

export default function Page() {
    return (
        <>
            <HeroSlider />
            <About />
            <Services />
            <FilterableGallery />
            <Reviews />
            <Contact />
            <WhatsAppFloatingButton />
            <Footer />
        </>
    );
}
