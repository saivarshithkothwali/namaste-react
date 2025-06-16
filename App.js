import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-gigih-rudya-designcrowd.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-rating-delTime">
        ⭐{avgRating}▪️{slaString}{" "}
      </h4>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-area">{areaName}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "89373",
      name: "Akshay tiffins",
      cloudinaryImageId: "bxc32vivxysgcgpzizgu",
      locality: "Rohini Hospital Road",
      areaName: "Hanamkonda",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "28696",
      avgRatingString: "4.5",
      totalRatingsString: "28K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 21:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/akshay-tiffins-rohini-hospital-road-hanamkonda-rest89373",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "98618",
      name: "Kadai Tiffins",
      cloudinaryImageId: "acarfillhnx35sf3ik7a",
      locality: "KLN Reddy Colony",
      areaName: "Hanamkonda",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "113309",
      avgRatingString: "4.4",
      totalRatingsString: "6.4K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 13:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/kadai-tiffins-kln-reddy-colony-hanamkonda-rest98618",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "99554",
      name: "New Maruthi tiffins",
      cloudinaryImageId: "hxoz63mldxl4iijoe7ua",
      locality: "Circuit House Road",
      areaName: "Hanamkonda",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "147252",
      avgRatingString: "4.5",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 14:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20RX%20listing%2018px.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20RX%20listing%2018px.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/new-maruthi-tiffins-circuit-house-road-hanamkonda-rest99554",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "94516",
      name: "Vantakam",
      cloudinaryImageId: "py40tmoijaevb4vyew8f",
      locality: "Max Cure Hospial Road",
      areaName: "Hanamkonda",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      veg: true,
      parentId: "221363",
      avgRatingString: "4.2",
      totalRatingsString: "9.5K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 20:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/vantakam-max-cure-hospial-road-hanamkonda-rest94516",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "86867",
      name: "Sri Geetha Bhavan",
      cloudinaryImageId: "u8vikokk1nopupywmu9t",
      locality: "Kakaji Nagar Colony",
      areaName: "Hanamkonda",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.3,
      veg: true,
      parentId: "193720",
      avgRatingString: "4.3",
      totalRatingsString: "20K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/sri-geetha-bhavan-kakaji-nagar-colony-hanamkonda-rest86867",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "375101",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/e355aa6b-bc56-4d39-ac2b-a657033916c2_375101.JPG",
      locality: "Kumrapally",
      areaName: "Hanamakonda",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "4.8K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/kwality-walls-ice-cream-and-more-kumrapally-hanamakonda-rest375101",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "382876",
      name: "Hotel Thousand Pillars",
      cloudinaryImageId: "jsy9txbhknnnjze9gvqt",
      locality: "Balasamudram",
      areaName: "Hanamkonda",
      costForTwo: "₹550 for two",
      cuisines: ["Biryani", "Continental", "Kebabs", "South Indian"],
      avgRating: 4.2,
      parentId: "247398",
      avgRatingString: "4.2",
      totalRatingsString: "4.7K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 22:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/hotel-thousand-pillars-balasamudram-hanamkonda-rest382876",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "76318",
      name: "Suprabha Hotel Restaurant",
      cloudinaryImageId: "adez2ctqjolzmohrxend",
      locality: "Nakkalagutta",
      areaName: "Hanamkonda",
      costForTwo: "₹360 for two",
      cuisines: ["Biryani", "Hyderabadi", "South Indian"],
      avgRating: 4.2,
      parentId: "197569",
      avgRatingString: "4.2",
      totalRatingsString: "7.6K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 11:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/suprabha-hotel-restaurant-nakkalagutta-hanamkonda-rest76318",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "406888",
      name: "Cake Plaza",
      cloudinaryImageId: "rjxd12mck0kauqadyehx",
      locality: "Narsampet Road",
      areaName: "Warangal",
      costForTwo: "₹110 for two",
      cuisines: [
        "Bakery",
        "Pizzas",
        "Burgers",
        "Chinese",
        "Desserts",
        "Continental",
      ],
      avgRating: 4.2,
      parentId: "15304",
      avgRatingString: "4.2",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 8.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "8.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/cake-plaza-narsampet-road-warangal-rest406888",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "437410",
      name: "Heeralal Sweets",
      cloudinaryImageId: "vxdmfbzzzwlsdu8j7koj",
      locality: "LB Nagar",
      areaName: "Warangal",
      costForTwo: "₹200 for two",
      cuisines: ["Sweets"],
      avgRating: 4.3,
      veg: true,
      parentId: "263928",
      avgRatingString: "4.3",
      totalRatingsString: "736",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/heeralal-sweets-lb-nagar-warangal-rest437410",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "75205",
      name: "Country Oven",
      cloudinaryImageId: "rcgx1ndchrzuwj7zpztw",
      locality: "Chaitanyapuri Colony",
      areaName: "Hanamkonda",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      avgRating: 4,
      parentId: "284",
      avgRatingString: "4.0",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/country-oven-chaitanyapuri-colony-hanamkonda-rest75205",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "82907",
      name: "Hotel Ashoka",
      cloudinaryImageId: "gchygc1cvhdt4xutvdqj",
      locality: "Sai Nagar",
      areaName: "Hanamkonda",
      costForTwo: "₹310 for two",
      cuisines: ["Biryani", "Chinese", "South Indian"],
      avgRating: 4.4,
      parentId: "98151",
      avgRatingString: "4.4",
      totalRatingsString: "4.9K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "POCKET HERO",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/hotel-ashoka-sai-nagar-hanamkonda-rest82907",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "149683",
      name: "Countryoven Cakes",
      cloudinaryImageId: "votxmbm5ym1bdr4rt9qw",
      locality: "Kazipet Road",
      areaName: "Hanamkonda",
      costForTwo: "₹440 for two",
      cuisines: ["Bakery"],
      avgRating: 4.4,
      parentId: "65393",
      avgRatingString: "4.4",
      totalRatingsString: "3.3K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹60",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/countryoven-cakes-kazipet-road-hanamkonda-rest149683",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "488830",
      name: "Redbus",
      cloudinaryImageId: "uvgkquc9lovmvvlvwgd0",
      locality: "Nakkalaghutta",
      areaName: "Hanamkonda",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Juices"],
      avgRating: 4.3,
      veg: true,
      parentId: "293250",
      avgRatingString: "4.3",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/redbus-nakkalaghutta-hanamkonda-rest488830",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "99558",
      name: "Cake master",
      cloudinaryImageId: "lnlrnvk3p9racn1wdgfz",
      locality: "Excise Colony",
      areaName: "Hanamkonda",
      costForTwo: "₹470 for two",
      cuisines: ["Bakery"],
      avgRating: 4.3,
      parentId: "12617",
      avgRatingString: "4.3",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20RX%20listing%2018px.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20RX%20listing%2018px.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹129",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/cake-master-excise-colony-hanamkonda-rest99558",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "75211",
      name: "Hotel Shreya",
      cloudinaryImageId: "chjo3z7hop51cs9oukyy",
      locality: "Kakaji Nagar Colony",
      areaName: "Hanamkonda",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "South Indian",
        "North Indian",
        "Chinese",
        "Thalis",
        "Hyderabadi",
      ],
      avgRating: 3.9,
      parentId: "102381",
      avgRatingString: "3.9",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-16 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹179",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-40e06e0e-d312-4d69-a953-0efc289288b1",
    },
    cta: {
      link: "https://www.swiggy.com/city/warangal/hotel-shreya-kakaji-nagar-colony-hanamkonda-rest75211",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />

      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
