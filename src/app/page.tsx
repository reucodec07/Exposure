import {
  About,
  Contact,
  FilterableGallery,
  Footer,
  HeroSlider,
  Reviews,
  Services,
  WhatsAppFloatingButton,
} from "./components";
export default function Page() {
  return (
    <>
      <HeroSlider />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <FilterableGallery />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <WhatsAppFloatingButton />
      <Footer />
    </>
  );
}
