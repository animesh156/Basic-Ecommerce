import FeatureProducts from "../components/products/FeatureProducts";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
    {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section className="py-10 ">
        <FeatureProducts />
      </section>
    </>
  );
}
