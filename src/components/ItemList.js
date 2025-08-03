import { ITEM_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummyData, showQuantity = false }) => {
  //console.log(items);
  //console.log(dummyData);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an Action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="my-4 py-2 border-b-1 border-b-gray-300 text-left flex"
        >
          <div className="flex flex-col w-9/12">
            <span className="font-bold  text-lg ">{item.card.info.name}</span>
            <span className="text-base font-semibold my-1">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>

            <span className="my-1">
              ⭐
              {item.card.info.ratings.aggregatedRating.rating
                ? item.card.info.ratings.aggregatedRating.rating
                : ""}
              ({item.card.info.ratings.aggregatedRating.ratingratingCountV2})
            </span>
            <p className="font-light text-md m-1 ">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 flex flex-col items-center">
            <div className="relative w-full h-[160px]">
              {item.card.info.imageId && (
                <img
                  src={ITEM_IMAGE_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                  className="w-full h-full rounded-xl object-cover"
                />
              )}
              <button
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white rounded px-6 py-1 hover:bg-gray-500 cursor-pointer transition-transform"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            {showQuantity && item.quantity && (
              <span className="mt-2 text-base font-semibold text-gray-700">
                Quantity: {item.quantity}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
