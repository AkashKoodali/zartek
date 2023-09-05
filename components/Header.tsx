import { ArrowSmallLeftIcon } from "@heroicons/react/20/solid";
import CartBtn from "./CartButton";

interface Props {
  data: Restuarant | null;
}

function Header({ data }: Props) {
  return (
    <header className="flex items-center p-2 md:p-5 m-1 md:m-2 justify-between">
      <div className="flex flex-1 items-center gap-3">
        <ArrowSmallLeftIcon className="w-6 h-6 md:w-9 md:h-9 cursor-pointer text-[#8c8c8c] hover:text-gray-600" />
        <h1 className="text-lg md:text-xl text-[#8c8c8c] font-bold">
          {data?.restaurant_name}
        </h1>
      </div>

      <div className="flex flex-1 justify-end items-center gap-8">
        <button className="text-sm md:text-base text-[#8c8c8c] hover:text-gray-600">
          My Orders
        </button>
        <CartBtn />
      </div>
    </header>
  );
}

export default Header;
