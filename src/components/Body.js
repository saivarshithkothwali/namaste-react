import RestrauntCard from "./RestrauntCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1 className="online-Status">You are Offline</h1>;

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="banner-header">
        <h1>Order food online from your favorite restaurants</h1>
        <p>Discover the best food & drinks in your city</p>
      </div>
      <div className="flex justify-center m-2">
        <div className="border border-gray-200 shadow-xl rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-4xl">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for restaurants, cuisines..."
              className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 transition-colors cursor-pointer"
              onClick={() => {
                const filteredRestraunt = listOfRestraunts.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestraunts(filteredRestraunt);
                console.log(searchText);
              }}
            >
              🔍 Search
            </button>
          </div>
          <div className="flex gap-2">
            <button
              className="text-red-400 border border-red-400 px-4 py-2 rounded-md  transition-colors cursor-pointer"
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
              className="text-red-400 border border-red-400 px-4 py-2 rounded-md  transition-colors cursor-pointer"
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
        </div>
      </div>

      <div className="res-container">
        {filteredRestraunts.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restraunts/" + restraunt.info.id}>
            <RestrauntCard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
