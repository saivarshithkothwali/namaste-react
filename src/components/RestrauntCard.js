import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

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

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-rating-delTime">
        ⭐{avgRating}▪️{slaString}
      </h4>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-area">{areaName}</h4>
    </div>
  );
};

export default RestrauntCard;
