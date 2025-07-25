import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl text-center  font-bold"> cart </h1>
      <div className="w-8/12 mx-auto flex justify-end">
        <button
          className="px-[14px] py-[6px] text-sm text-red-600 border border-red-600 rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-8/12 mx-auto my-6 bg-gray-100 drop-shadow-xl p-2  ">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
