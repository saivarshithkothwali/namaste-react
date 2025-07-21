import ItemList from "./ItemList";
import { useState } from "react";

const RestrauntCategory = ({ data, showItems, setShowIndex, dummyData }) => {
  //console.log(data);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-8/12 mx-auto my-6 bg-gray-100 drop-shadow-xl p-2 ">
      <div
        className="flex justify-between hover:cursor-pointer hover:bg-gray-200 p-1 m-1"
        onClick={handleClick}
      >
        {/*Accordian Header*/}
        <span className="text-neutral-900 text-xl font-medium">
          {data.title} ({data.itemCards.length})
        </span>
        <span>▼</span>
      </div>

      {/*Accordian Body */}
      {showItems && <ItemList items={data.itemCards} dummyData={dummyData} />}
    </div>
  );
};

export default RestrauntCategory;
