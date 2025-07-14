import ItemList from "./ItemList";
import { useState } from "react";

const RestrauntCategory = (data) => {
  //console.log(data);
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("Clicked");
    setShowItems(!showItems);
  };
  return (
    <div className="w-8/12 mx-auto my-6 bg-gray-100 drop-shadow-xl p-2 ">
      <div
        className="flex justify-between hover:cursor-pointer hover:bg-gray-200 p-1 m-1"
        onClick={handleClick}
      >
        {/*Accordian Header*/}
        <span className="text-neutral-900 text-xl font-medium">
          {data.data.title} ({data.data.itemCards.length})
        </span>
        <span>▼</span>
      </div>

      {/*Accordian Body */}
      {showItems && <ItemList items={data.data.itemCards} />}
    </div>
  );
};

export default RestrauntCategory;
