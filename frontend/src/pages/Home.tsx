import { useEffect } from "react";
import FeatureProducts from "../components/products/FeatureProducts";
import Hero from "../components/hero/Hero";
import DailyBestSell from "../components/products/DailyBestSell";
import DealOfTheDay from "../components/products/DealOfTheDay";
import FooterImg from "../components/footer/FooterImg";
import FoodProducts from "../components/products/FoodProducts";

// Footer benefit data
const data = [
  {
    id: 1,
    title: "Best prices & offers",
    description: "Orders $50 or more",
    icon: "/footer-icons/icon1.svg",
  },
  {
    id: 2,
    title: "Free delivery",
    description: "24/7 amazing services",
    icon: "/footer-icons/icon2.svg",
  },
  {
    id: 3,
    title: "Great daily deal",
    description: "Save 50% today",
    icon: "/footer-icons/icon3.svg",
  },
  {
    id: 4,
    title: "Wide assortment",
    description: "Mega Discounts",
    icon: "/footer-icons/icon4.svg",
  },
  {
    id: 5,
    title: "Easy returns",
    description: "Within 30 days",
    icon: "/footer-icons/icon5.svg",
  },
];

export default function Home() {

  // Scroll to top when Home page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-2">

      {/* ============================
          HERO SECTION
      =============================*/}
      <Hero />

      {/* ============================
          MAIN PRODUCTS SECTION
      =============================*/}
      <section className="py-10 space-y-5">
        {/* Featured products slider */}
        <FeatureProducts />

        {/* Food & grocery products */}
        <FoodProducts />

        {/* Daily best-selling items */}
        <DailyBestSell />

        {/* Deal of the day section */}
        <DealOfTheDay />
      </section>

      {/* ============================
          FOOTER IMAGE + BENEFITS
      =============================*/}
      <section className="mb-11">
        
        {/* Promotional footer image */}
        <FooterImg />

        {/* Footer highlights / benefits */}
        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-5 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-[#F4F6FA] flex items-center gap-3 p-3 rounded-md"
            >
              {/* Icon */}
              <img src={item.icon} className="w-10 h-10" alt={item.title} />

              {/* Text content */}
              <div>
                <h3 className="text-[12px] font-semibold font-quicksand text-[#253D4E]">
                  {item.title}
                </h3>
                <p className="font-lato text-[10px] text-[#ADADAD]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
