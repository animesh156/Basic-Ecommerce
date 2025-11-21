import DealsCard from "../cards/DealsCard";

export default function DealOfTheDay() {
  // Dummy deals array inside the same component
  const deals = [
    {
      id: 1,
      image: "/product/deals/img1.png",
      title: "Seeds of Change Organic Quinoa, Brown & Red Rice",
      company: "NestFood",
      price: 32.85,
      originalPrice: 33.8,
      buttonText: "Add",
      rating: 4.0,
    },
    {
      id: 2,
      image: "/product/deals/img2.png",
      title: "Perdue Simply Smart Organics Gluten Free",
      company: "Old El Paso",
      price: 24.85,
      originalPrice: 26.8,
      buttonText: "Add",
      rating: 4.0,
    },
    {
      id: 3,
      image: "/product/deals/img3.png",
      title: "Signature Wood-Fired Mushroom and Caramelized",
      company: "Progresso",
      price: 12.85,
      originalPrice: 13.8,
      buttonText: "Add",
      rating: 4.0,
    },
    {
      id: 4,
      image: "/product/deals/img4.png",
      title: "Simply Lemonade with Raspberry Juice",
      company: "Yoplait",
      price: 15.85,
      originalPrice: 16.8,
      buttonText: "Add",
      rating: 4.0,
    },
  ];

  return (
    <section className="px-[108px]">

      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[#253D4E] text-[22px] font-bold font-quicksand">
          Deals Of The Day
        </h3>

        <p className="font-normal text-[#7E7E7E] text-[12px]">All deals</p>
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
          />
        ))}
      </div>

    </section>
  );
}
