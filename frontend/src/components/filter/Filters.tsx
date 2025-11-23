import { useState } from "react";

export default function Filters() {
  const categories = [
  { name: "Juice & Drinks", quantity: 20 },
  { name: "Dairy & Milk", quantity: 54 },
  { name: "Snack & Spice", quantity: 64 }
];


  const tags = [
    "Vegetables",
    "Juice",
    "Food",
    "Dry Fruits",
    "Vegetables",
    "Juice",
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(500);

  function toggleCategory(cat: string) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  return (
    <div className="w-64 bg-[#F7F7F8] p-5 rounded-sm  border border-[#E9E9E9] space-y-6">
      {/* CATEGORY FILTER */}
      <div>
        <h3 className="text-[14px] font-poppins font-semibold text-[#2B2B2D] mb-3">
          Product Category
        </h3>

       <div className="flex flex-col gap-2">
  {categories.map((cat) => {
    const checked = selectedCategories.includes(cat.name);

    return (
      <label
        key={cat.name}
        className="flex items-center justify-between mt-2.5 cursor-pointer"
      >
        {/* LEFT SIDE: Checkbox + Name */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleCategory(cat.name)}
            className="w-4 h-4 border-[#DDDDDD] border accent-[#3BB77E]"
          />

          <span
            className={`text-sm font-normal ${
              checked ? "text-[#3BB77E]" : "text-[#7A7A7A]"
            }`}
          >
            {cat.name}
          </span>
        </div>

        {/* RIGHT SIDE: Quantity */}
        <span className="text-sm text-[#7A7A7A]">[{cat.quantity}]</span>
      </label>
    );
  })}
</div>

      </div>

      {/* PRICE SLIDER */}
      <div>
        <h3 className="text-[14px] font-semibold text-[#253D4E] mb-2">
          Filter By Price
        </h3>

        {/* DUAL RANGE SLIDER */}
        <div className="relative w-full pt-5 pb-2">
          {/* Track */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 rounded"></div>

          {/* Highlighted selected range */}
          <div
            className="absolute top-1/2 h-1 bg-[#F53E32] rounded"
            style={{
              left: `${((minPrice - 20) / (500 - 20)) * 100}%`,
              right: `${100 - ((maxPrice - 20) / (500 - 20)) * 100}%`,
            }}
          ></div>

          {/* MIN thumb */}
          <input
            type="range"
            min="20"
            max="500"
            value={minPrice}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value < maxPrice) setMinPrice(value);
            }}
            className="absolute bottom-3 w-full pointer-events-none appearance-none"
            style={{ height: 0 }}
          />

          {/* MAX thumb */}
          <input
            type="range"
            min="20"
            max="500"
            value={maxPrice}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > minPrice) setMaxPrice(value);
            }}
            className="absolute w-full bottom-3 pointer-events-none appearance-none"
            style={{ height: 0 }}
          />

          <style>
            {`
      input[type="range"]::-webkit-slider-thumb {
        pointer-events: all;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #F53E32;
        cursor: pointer;
        -webkit-appearance: none;
      }
      input[type="range"]::-moz-range-thumb {
        pointer-events: all;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #F53E32;
        cursor: pointer;
      }
      `}
          </style>
        </div>

        {/* DYNAMIC PRICE RANGE */}
        <p className="text-sm font-bold  mt-3">
          Price :{" "}
          <span className="text-[#7A7A7A] font-semibold">
            ${minPrice} – ${maxPrice}
          </span>
        </p>
      </div>

      {/* FILTER BUTTON */}
      <button className="bg-[#F53E32] font-normal text-[14px] px-5 py-2 text-white">
        Filter
      </button>

      {/* PRODUCT TAGS */}
      <div>
        <h3 className="text-[14px] font-medium text-[#253D4E] mb-3">
          Product Tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-white rounded-lg text-sm text-gray-700  "
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
