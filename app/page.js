import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import Videos from "@/components/videos/Videos";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Videos />
      <Testimonials />
      <Contact />
    </>
  );
}
