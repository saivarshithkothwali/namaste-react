import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
  const [listOfRestraunts, setListOfRestraunt] = useState([
    {
      info: {
        id: "89373",
        name: "Akshay tiffins",
        cloudinaryImageId: "bxc32vivxysgcgpzizgu",
        areaName: "Hanamkonda",
        costForTwo: "₹100 for two",
        cuisines: ["South Indian"],
        avgRating: 4.5,

        sla: {
          slaString: "10-15 mins",
        },
      },
    },
    {
      info: {
        id: "89374",
        name: "KFC",
        cloudinaryImageId: "bxc32vivxysgcgpzizgu",
        areaName: "Hanamkonda",
        costForTwo: "₹100 for two",
        cuisines: ["South Indian"],
        avgRating: 3.8,
        sla: {
          slaString: "10-15 mins",
        },
      },
    },
  ]);

  let listOfRestrauntsJS = [
    {
      info: {
        id: "89373",
        name: "Akshay tiffins",
        cloudinaryImageId: "bxc32vivxysgcgpzizgu",
        areaName: "Hanamkonda",
        costForTwo: "₹100 for two",
        cuisines: ["South Indian"],
        avgRating: 4.5,

        sla: {
          slaString: "10-15 mins",
        },
      },
    },
    {
      info: {
        id: "89374",
        name: "KFC",
        cloudinaryImageId: "bxc32vivxysgcgpzizgu",
        areaName: "Hanamkonda",
        costForTwo: "₹100 for two",
        cuisines: ["South Indian"],
        avgRating: 3.8,
        sla: {
          slaString: "10-15 mins",
        },
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Ratings 4.0+
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
