import ItemList from "./ItemList";

const RestrauntCategory = (data) => {
  //console.log(data);
  return (
    <div className="w-8/12 mx-auto my-6 bg-gray-100 drop-shadow-2xl p-4 ">
      <div className="flex justify-between">
        {/*Accordian Header*/}
        <span className="text-neutral-900 text-xl font-medium">
          {data.data.title} ({data.data.itemCards.length})
        </span>
        <span>▼</span>
      </div>
      <ItemList items={data.data.itemCards} />
      {/*Accordian Body */}
    </div>
  );
};

export default RestrauntCategory;
