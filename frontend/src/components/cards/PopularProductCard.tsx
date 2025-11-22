type PopularProduct = {
  id: number;
  image: string;
  title: string;
  type: string;
  price: string;
  actualPrice: string;
};

export default function PopularProductCard({
  image,
  title,
  type,
  price,
  actualPrice,
}: PopularProduct) {
  return (
    <div className="border w-64 border-[#E9E9E9] rounded-md py-3 px-3  transition cursor-pointer">
      <div className="relative border-[#E9E9E9] border rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-md"
        />

        <div className="w-10 absolute left-24 -bottom-5 rounded-full h-10 bg-[#F7F7F8] border-2 border-[#E9E9E9]"></div>
      </div>

      <p className="mt-6 text-center text-[14px] text-[#777777]">{type}</p>

      <div className="w-56">

          <h4 className="text-[12px] text-center font-poppins font-medium text-[#2B2B2D] mt-9">
        {title}
      </h4>

      </div>

    

      <div className=" text-center text-[14px] font-bold space-x-2 mt-2">
        <span className="text-red-500 ">{price}</span>
        <span className="text-[#7A7A7A] font-normal line-through text-[12px]">
          {actualPrice}
        </span>
      </div>
    </div>
  );
}
