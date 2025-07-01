import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ITEM_IMAGE_URL } from "../utils/constants";

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.002668480081386&lng=79.54484011977911&restaurantId=77013&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h3>
          ⭐{avgRatingString} ({totalRatingsString}) ▪️{costForTwoMessage}
        </h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{areaName}</h3>
      </div>

      <div className="res-menu">
        {itemCards.map((item) => (
          <div key={item.card.info.id} className="menu-item">
            <div className="item-details">
              <h3 className="name">{item.card.info.name}</h3>
              <p className="price">
                Rs.{item.card.info.price / 100 || item.card.info.price / 100}
              </p>
              <p className="rating">
                ⭐{item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </p>
              <p className="description">{item.card.info.description}</p>
            </div>
            {item.card.info.imageId && (
              <img
                src={ITEM_IMAGE_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="food-img"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestrauntMenu;
