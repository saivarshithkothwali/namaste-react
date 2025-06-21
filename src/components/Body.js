import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.002668480081386&lng=79.54484011977911&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListOfRestraunts(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  console.log("Body Rendered");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfRestraunts(filteredList);
          }}
        >
          Ratings 4.0+
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter((res) => {
              const cost = parseInt(res.info.costForTwo.match(/\d+/)[0]);
              return cost <= 300;
            });
            setListOfRestraunts(filteredList);
          }}
        >
          Less than ₹300
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
