import DealsCard from "../cards/DealsCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function DealOfTheDay() {
  // Dummy deals array inside the same component
  const deals = [
    {
      id: 15,
      image:
        "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763887156/40bac8dde33332c80dd86a0af57763998b1a2323_d4qiok.png",
      title: "Seeds of Change Organic Quinoa, Brown & Red Rice",
      company: "NestFood",
      price: 32.85,
      originalPrice: 33.8,
      buttonText: "Add",
      rating: 4.0,
    },
    {
      id: 16,
      image:
        "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763887303/48b065d6fc7ed4fe4d2483ce011a68b961bc4c38_eqja9g.png",
      title: "Perdue Simply Smart Organics Gluten Free",
      company: "Old El Paso",
      price: 24.85,
      originalPrice: 26.8,
      buttonText: "Add",
      rating: 4.0,
    },
    {
      id: 17,
      image:
        "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763887354/9a69f4084a83067779a40ef2edc4c0ccfc1b059c_wbr2wu.png",
      title: "Signature Wood-Fired Mushroom and Caramelized",
      company: "Progresso",
      price: 12.85,
      originalPrice: 13.8,
      buttonText: "Add",
      rating: 4.0,
    },
    {
      id: 18,
      image:
        "https://res.cloudinary.com/dcnqzrwkb/image/upload/v1763887394/69d8414b943718ee29e57f70956ef4bcafcf4bca_dwhpsy.png",
      title: "Simply Lemonade with Raspberry Juice",
      company: "Yoplait",
      price: 15.85,
      originalPrice: 16.8,
      buttonText: "Add",
      rating: 4.0,
    },
  ];

  return (
    <section className="px-[108px] mt-8">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-[#253D4E] text-[22px] font-bold font-quicksand">
          Deals Of The Day
        </h3>

        <p className="font-normal flex items-center text-[#7E7E7E] text-[12px]">
          All deals <MdOutlineKeyboardArrowRight size={18} />
        </p>
      </div>

      <div className=" flex gap-6">
        {deals.map((item) => (
          <DealsCard
            key={item.id}
            image={item.image}
            title={item.title}
            company={item.company}
            price={item.price}
            originalPrice={item.originalPrice}
            buttonText={item.buttonText}
            rating={item.rating}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
}
