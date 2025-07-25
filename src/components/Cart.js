import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl text-center  font-bold"> cart </h1>
      <div className="w-8/12 mx-auto my-6 bg-gray-100 drop-shadow-xl p-2 ">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
