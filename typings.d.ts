interface Restuarant extends Category {
  restaurant_id: string;
  restaurant_name: string;
  restaurant_image: string;
  table_id: string;
  table_name: string;
  branch_name: string;
  nexturl: string;
  table_menu_list: Category[];
}

interface Category {
  menu_category: string;
  menu_category_id: string;
  menu_category_image: string;
  nexturl: string;
  category_dishes: Dish[];
}

interface Dish {
  dish_id: string;
  dish_name: string;
  dish_price: number;
  dish_image: string;
  dish_currency: string;
  dish_calories: number;
  dish_description: string;
  dish_Availability: boolean;
  dish_Type: DishType;
  nexturl: string;
  addonCat: [];
}

type DishType = 1 | 2;

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface CartItem {
  dish: Dish;
  qty: number;
}
interface CartState {
  cartItems: CartItem[];
}
