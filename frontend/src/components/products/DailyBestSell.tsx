import BgImageCard from "../cards/BgImageCard";
import ItemCard from "../cards/ItemCard";

type Product = {
  id: number;
  text: string;
  image: string;
};

const dummyProduct: Product[] = [
  {
    id: 1,
    text: "Bring nature into your home",
    image: "/product/bestsell/bg.png",
  },
  // Only the first product will be passed to BgImageCard
];

const products = [
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763730373/5e54ca86f58be985a7ea1082b7da9261aef20407_j1cryh.jpg",
    company: "Hodo Foods",
    name: "All Natural Italian-Style Chicken Meatballs",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.0,
    badgeText: "Save 35%",
    badgeColor: "#3BB77E",
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763884141/acec553fd1f4f60d850639bbd40b34daa0f2b22b_x47ryt.jpg",
    company: "Hodo Foods",
    name: "Angie’s Boomchickapop Sweet and womnies",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.0,
    badgeText: "Sale",
    badgeColor: "#67BCEE",
  },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763884173/d668a514668090fd83bc70a4b89901e418f2668d_mvebml.jpg",
    company: "Hodo Foods",
    name: "Foster Farms Takeout Crispy Classic",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.0,
    badgeText: "Best Sale",
    badgeColor: "#F59758",
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763884208/5700b33147f231860ac4a80cb5e875f0a4c9dd61_mzrlau.jpg",
    company: "Hodo Foods",
    name: "Foster Farms Takeout Crispy Classic",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.0,
    badgeText: "Best Sale",
    badgeColor: "#F74B81",
  },
];

export default function DailyBestSell() {
  return (
    <div className="px-28 mt-10">
      <div className="flex justify-between">
        <h3 className="text-[#253D4E] text-[22px] font-bold font-quicksand">
          Daily Best Sells
        </h3>

        <ul className="font-quicksand flex text-sm gap-4 font-semibold">
          <li className="text-[#3BB77E]">Featured</li>
          <li>Popular</li>
          <li>New added</li>
        </ul>
      </div>

      <div className="mt-4 flex gap-4">
        {/* Pass only the first product to BgImageCard */}
        <BgImageCard
          product={dummyProduct[0]} // Only the first product is passed here
          width="320px"
          height="360px"
          showArrow={true}
          textSize="text-20px"
          bottom={140}
          left={30}
          spaceY="space-y-8"
        />
        {/* rest item cards */}
        {products.map((item) => (
          <ItemCard type={""} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
