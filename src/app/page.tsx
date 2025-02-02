
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Showcase from "./components/Showcase"

export default function Home() {
  return (
    <div style={{ fontFamily: "Belleza-Regular" }}>
      <Navbar />
      <Hero />
      <Cards />
      <Product />
      <Showcase />
      <Footer />
    </div>
  );
}
