import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Services from "@/components/services/Services";
import Videos from "@/components/videos/Videos";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Videos />
    </>
  );
}
