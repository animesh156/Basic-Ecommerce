import { FaArrowRight } from "react-icons/fa"; // Import an arrow icon

type Product = {
  id: number;
  text: string;
  image: string;
};

type Props = {
  product: Product;
  width?: string;
  height?: string;
  left?: number; // Optional left position
  bottom?: number; // Optional bottom position
  textColor?: string; // Optional text color
  textSize?: string; // Optional text size
  buttonTextColor?: string; // Optional button text color
  buttonBgColor?: string; // Optional button background color
  buttonTextSize?: string; // Optional button text size
  showArrow?: boolean; // Whether to show the arrow icon in the button
  spaceY?: string;
};

function BgImageCard({
  product,
  width = "350px",
  height = "200px",
  left = 26, // Default left position is 6
  bottom = 40, // Default bottom position is 10
  textColor = "white", // Default text color is white
  textSize = "text-xs", // Default text size is small
  buttonTextColor = "white", // Default button text color
  buttonBgColor = "#F53E32", // Default button background color
  buttonTextSize = "text-[7px]", // Default button text size
  showArrow = false, // Show the arrow icon by default
  spaceY = "space-y-4", // Default vertical space
}: Props) {
  return (
    <div
      key={product.id}
      className="relative rounded-lg border border-white overflow-hidden"
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: width,
        height: height,
      }}
    >
      {/* Dynamically position the content based on left and bottom values */}
      <div
        className={`absolute w-28 inset-0 flex flex-col justify-end ${spaceY}`}
        style={{
          left: `${left}px`, // Dynamically apply the left position
          bottom: `${bottom}px`, // Dynamically apply the bottom position
        }}
      >
        <h4
          className={`font-bold font-quicksand ${textSize} text-${textColor}`}
        >
          {product.text}
        </h4>

        <button
          className={`mt-3 w-14 px-1 py-1 text-[7px] font-normal  transition ${buttonTextSize}`}
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
          }}
        >
          Shop Now
          {showArrow && (
            <FaArrowRight className="ml-1 inline-block" size={5} />
          )}{" "}
          {/* Show arrow icon if true */}
        </button>
      </div>
    </div>
  );
}

export default BgImageCard;
