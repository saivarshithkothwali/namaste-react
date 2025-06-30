import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        ⭐{avgRatingString} ({totalRatingsString}) ▪️{costForTwoMessage}
      </h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{areaName}</h3>
    </div>
  );
};

export default RestrauntMenu;
