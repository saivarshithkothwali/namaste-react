import RestrauntCard from "./RestrauntCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  const [searchText, setSearchText] = useState("");
  //console.log("Body Rendered");

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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredRestraunt = listOfRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestraunts(filteredRestraunt);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRestraunts(filteredList);
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
            setFilteredRestraunts(filteredList);
          }}
        >
          Less than ₹300
        </button>
      </div>

      <div className="res-container">
        {filteredRestraunts.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
