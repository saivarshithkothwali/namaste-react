import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestrauntCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    sla: { slaString },
  } = resData?.info;

  const data = useContext(UserContext);
  //console.log(data);

  return (
    <div className="flex flex-col w-[200px] h-[300px] m-[15px] rounded-[10px] gap-0 transition-transform  duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] bg-gray-100">
      <img
        className="w-full h-[150px] p-0 rounded-xl "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-[17px] font-semibold px-[5px] pt-[5px] pb-0 text-gray-900 leading-snug  truncate">
        {name}
      </h3>

      <h4 className="text-[16px] font-medium px-[5px] pt-[5px] pb-0 text-[#333333] m-0">
        ⭐{avgRating}▪️{slaString}
      </h4>
      <h4 className="text-[16px] font-extralight px-[5px] pt-[5px] pb-0 text-gray-500 m-0 line-clamp-1">
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-[16px] font-extralight px-[5px] pt-[5px] pb-0 text-[#777777] m-0">
        {areaName}
      </h4>
      <h4 className="text-[16px] font-extralight px-[5px] pt-[5px] pb-0 text-[#777777] m-0">
        User:{data.loggedInUser}
      </h4>
    </div>
  );
};

//Higher Order Component
// input- RestrauntCard and returns RestrauntCardVeg

export const withVegLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute z-10  bg-green-600 text-white text-xs mx-4 px-1 py-0.5 rounded font-semibold shadow-sm flex items-center gap-1 ">
          <img
            src="https://www.clipartmax.com/png/full/165-1650927_veg-symbol.png"
            alt="Veg Symbol"
            className="w-3.5 h-3.5"
          />
          Veg
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
