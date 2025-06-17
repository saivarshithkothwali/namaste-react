import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";

export const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
