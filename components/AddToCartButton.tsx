import React from "react";

// redux
import { dishQtyInCartSelector, increment, decrement } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface Props {
  dish: Dish;
}

const AddToCartButton = (props: Props) => {
  const qty = useAppSelector((state) =>
    dishQtyInCartSelector(state, props.dish?.dish_id)
  );
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row h-8 w-20 rounded-2xl relative bg-[#4aaf50] mt-1 ">
      <button
        onClick={() => dispatch(decrement(props.dish))}
        data-action="decrement"
        className="add-cart-d"
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <span className="add-cart-t">{!qty ? 0 : qty}</span>

      <button
        onClick={() => dispatch(increment(props.dish))}
        className="add-cart-i"
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  );
};

export default AddToCartButton;
