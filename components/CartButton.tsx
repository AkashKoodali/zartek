"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
// redux
import { totalCartItemsSelector } from "@/redux/cartSlice";
import { useAppSelector } from "@/redux/store";

const CartBtn = () => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div className={`relative`}>
      <ShoppingCartIcon className="w-6 h-6 md:w-9 md:h-8 text-[#9fa0a3] hover:text-gray-600 cursor-pointer" />
      {!!totalItems && (
        <div
          key={totalItems}
          className="bg-red-500 flex justify-center items-center
        rounded-full w-6 absolute -top-2 -right-2 text-white animate-pingOnce
        "
        >
          {totalItems}
        </div>
      )}
    </div>
  );
};

export default CartBtn;
