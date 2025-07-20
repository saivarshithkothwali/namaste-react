import Shimmer from "./Shimmer";
import { ITEM_IMAGE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";
import { useState } from "react";

const RestrauntMenu = () => {
  //const [resInfo, setResInfo] = useState(null); This is not required as we are using custom Hook

  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  const [showIndex, setShowIndex] = useState();

  /* useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };*/

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;

  const regularCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  //console.log(regularCards);
  const itemCards = regularCards?.[2]?.card?.card?.itemCards || [];

  //console.log(itemCards);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

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

      {categories.map((category, index) => (
        <RestrauntCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
