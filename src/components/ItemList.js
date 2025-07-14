import { ITEM_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
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
            <p className="font-light text-md m-1">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 h-auto rounded-xl object-cover p-4 ">
            <img
              src={ITEM_IMAGE_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
