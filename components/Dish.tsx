import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";

interface Props {
  dish: Dish;
}
const Dish = ({ dish }: Props) => {
  return (
    <div className="relative w-full overflow-clip mt-2 mx-2">
      <div className="flex justify-between gap-10 mb-4">
        <div className="box-border w-[40vw] md:w-[60vw] flex">
          <div className="absolute mt-1">
            {dish.dish_Type === 1 ? (
              <Image
                src={"/svg/non-veg-icon.png"}
                alt="non-veg"
                width={10}
                height={10}
                className="w-6 h-6 object-cover"
              />
            ) : (
              <Image
                src={"/svg/veg-icon.png"}
                alt="non-veg"
                width={10}
                height={10}
                className="w-6 h-6 object-cover"
              />
            )}
          </div>
          <div className="pl-10 flex flex-col space-y-2">
            <h1 className="text- md:text-lg font-semibold flex-wrap text-black/80">
              {dish?.dish_name}
            </h1>
            <div className="w-[60vw] md:w-[80vw] flex justify-between items-center ">
              <h3 className="text-sm font-semibold text-black/80 ">
                {dish?.dish_currency} {""} {dish?.dish_price}
              </h3>
              <h3 className="text-xs md:text-sm font-semibold text-black/80 flex-nowrap">
                {dish?.dish_calories} Calories
              </h3>
            </div>
            <span className="text-sm text-gray-400 font-medium">
              {dish?.dish_description}
            </span>

            {dish.dish_Availability ? (
              <AddToCartButton dish={dish} />
            ) : (
              <span className="text-sm text-red-500 font-medium">
                Not Available
              </span>
            )}
            {dish?.addonCat.length != 0 && (
              <span className="text-sm text-red-500 font-medium">
                Customizations available
              </span>
            )}
          </div>
        </div>
        <div className=" mr-6 mt-3 items-start">
          <Image
            className="file:w-16 h-12 md:w-20 md:h-16 object-cover rounded-md"
            src={dish.dish_image}
            alt="Dish"
            width={50}
            height={50}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Dish;
