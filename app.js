import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  -Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo-Container">
            <img className="logo" src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?w=740&t=st=1703856114~exp=1703856714~hmac=db4fcc2134e800db3cdc9afedc966dc9f39777e0f9697ccf3233787bd574cc19"/>
            </div>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>Restaurant</li>
                <li>About Us</li>
                <li>Cart</li>
              </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, locality, costForTwo, deliveryTime} = resData?.info;
    return (
        <div className="restaurant-card">
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};
// Json Data to make
const resList =  [
    {
    "info": {
      "id": "439403",
      "name": "Waffcha",
      "cloudinaryImageId": "5dd41ea126046ba097106437439d3f7e",
      "locality": "People'S Community Hall",
      "areaName": "Kankarbagh",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Waffle",
        "Beverages",
        "Ice Cream",
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "265933",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=10192942~p=1~eid=0000018c-b686-cd72-1d71-a56f006c0104~srvts=1703869336946~45995",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 02:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=439403",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "591085",
      "name": "0612 Road Chef",
      "cloudinaryImageId": "qo1ypqreeaulytd7cmgr",
      "locality": "Sanjay Nagar Road",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Tandoor",
        "Chinese",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "22680",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=591085",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "242395",
      "name": "Ram Babu Restaurant",
      "cloudinaryImageId": "mq1vlwbzjanzdeukja3d",
      "locality": "Chandmadi road",
      "areaName": "Kankarbagh",
      "costForTwo": "₹297 for two",
      "cuisines": [
        "Chinese",
        "North Indian"
      ],
      "avgRating": 3.9,
      "parentId": "166239",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=242395",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "150950",
      "name": "New Pal Hotel",
      "cloudinaryImageId": "cadd4qgaodthe0ulvbgv",
      "locality": "Station Road",
      "areaName": "Fraser Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Tandoor"
      ],
      "avgRating": 3.7,
      "parentId": "147430",
      "avgRatingString": "3.7",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=150950",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "463802",
      "name": "Bhojan Raat Bhar",
      "cloudinaryImageId": "jq60nvr7sdo5ajeyas2l",
      "locality": "City Center",
      "areaName": "Fraser Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "avgRating": 3.9,
      "parentId": "261965",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "promoted": true,
      "adTrackingId": "cid=10240481~p=2~eid=0000018c-b686-cd72-1d71-a570006c0247~srvts=1703869336946~45995",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 03:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=463802",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "88781",
      "name": "Sujata Family Restaurant",
      "cloudinaryImageId": "np13tsnfrxylkrk1ykm5",
      "areaName": "Fraser Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Mughlai",
        "Chinese",
        "North Indian"
      ],
      "avgRating": 3.8,
      "parentId": "196672",
      "avgRatingString": "3.8",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=88781",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "712098",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
      "locality": "Hanuman Nagar",
      "areaName": "Kailash Puri Road",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=712098",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "403163",
      "name": "Kolkata Biryani Darbar",
      "cloudinaryImageId": "zmm8hj47sxonoqeeyd48",
      "locality": "Lohiya Nagar",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "Indian",
        "Chinese",
        "Tandoor"
      ],
      "avgRating": 3.6,
      "parentId": "248971",
      "avgRatingString": "3.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=403163",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "229028",
      "name": "Afra Tafri",
      "cloudinaryImageId": "c0e80797374623559627e481286784fb",
      "locality": "Boring Canal Road",
      "areaName": "Kidwaipuri",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Biryani",
        "Chinese",
        "Indian",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "27461",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "promoted": true,
      "adTrackingId": "cid=10239407~p=4~eid=0000018c-b686-cd6f-1d71-a550006c0419~srvts=1703869336943~45826",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=229028",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "254135",
      "name": "McDonald's",
      "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
      "locality": "Gandhi Maidan",
      "areaName": "Golambar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=254135",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "650233",
      "name": "Veer Ji Malai Chaap Wale",
      "cloudinaryImageId": "ea5e6f3521a1b76de25f43be8b43b4bd",
      "locality": "Lohiya Park",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Tandoor",
        "Snacks",
        "Biryani"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "12056",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=650233",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "417678",
      "name": "Red Chilli",
      "cloudinaryImageId": "pkwxbkkiwflpmu9iakqe",
      "locality": "PC Colony",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese"
      ],
      "avgRating": 3.7,
      "parentId": "767",
      "avgRatingString": "3.7",
      "totalRatingsString": "20+",
      "promoted": true,
      "adTrackingId": "cid=10204827~p=5~eid=0000018c-b686-cd6f-1d71-a551006c0502~srvts=1703869336943~45826",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=417678",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "524423",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "tnjwc1hltzaudqyilpzq",
      "locality": "Malahi Pakadi Chowk",
      "areaName": "Kankarbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "4961",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=524423",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "221504",
      "name": "Well Food",
      "cloudinaryImageId": "dpaj42ojdef7ntgv3hlo",
      "locality": "Tempo Stand",
      "areaName": "Kankarbagh",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "South Indian",
        "Biryani"
      ],
      "avgRating": 3.9,
      "parentId": "225606",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=221504",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "340844",
      "name": "Patna Foodies Club",
      "cloudinaryImageId": "i8vaufcondh73ea3vk1o",
      "locality": "Ams Park",
      "areaName": "Sri Krishnapuri",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Biryani",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "156428",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=10240098~p=6~eid=0000018c-b686-cd6f-1d71-a552006c0665~srvts=1703869336943~45826",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 4.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "4.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=340844",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "149350",
      "name": "Red Chillii",
      "cloudinaryImageId": "u6yvwh1p0q6yhu3b2yy2",
      "locality": "Ufo Mall",
      "areaName": "Anisabad",
      "costForTwo": "₹338 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Tandoor"
      ],
      "avgRating": 3.9,
      "parentId": "168313",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=149350",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "736877",
      "name": "Shawarma Point",
      "cloudinaryImageId": "730a69ebb9b174c10298be98c0e52591",
      "locality": "Beside Srikant Medical",
      "areaName": "Mithapur",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 4.1,
      "parentId": "837",
      "avgRatingString": "4.1",
      "totalRatingsString": "5",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=736877",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "490338",
      "name": "Biryani Pot",
      "cloudinaryImageId": "kuab7kkxtltwo2xvd0cq",
      "locality": "Lohiya Nagar",
      "areaName": "Kankarbagh",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Chinese",
        "Tandoor"
      ],
      "avgRating": 3.7,
      "parentId": "21798",
      "avgRatingString": "3.7",
      "totalRatingsString": "100+",
      "promoted": true,
      "adTrackingId": "cid=10240447~p=7~eid=0000018c-b686-cd6f-1d71-a553006c0760~srvts=1703869336943~45826",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=490338",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "729866",
      "name": "VYANJAN RESTAURANT",
      "cloudinaryImageId": "fc25b56a5fea99c3390f386bd8a0d705",
      "locality": "Postal Park Churaha",
      "areaName": "Kankarbagh",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Indian",
        "Chinese"
      ],
      "avgRating": 3.9,
      "parentId": "224688",
      "avgRatingString": "3.9",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=729866",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "768440",
      "name": "Cafe Sip N Smile",
      "cloudinaryImageId": "d70919d5b1948b28d73c2af48d4d9013",
      "locality": "Boring Canal Road",
      "areaName": "Srikrishnapuri",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Cafe",
        "Chinese",
        "Fast Food",
        "Pizzas",
        "Burgers",
        "Snacks"
      ],
      "avgRating": 4.5,
      "parentId": "54153",
      "avgRatingString": "4.5",
      "totalRatingsString": "20+",
      "promoted": true,
      "adTrackingId": "cid=10003437~p=8~eid=0000018c-b686-cd6f-1d71-a554006c0851~srvts=1703869336943~45826",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=768440",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "496741",
      "name": "Banjara Vyanjan",
      "cloudinaryImageId": "wd8ubfefelmejaa5vtkh",
      "locality": "PC Colony",
      "areaName": "Kankarbagh",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Fast Food",
        "Chinese",
        "Thalis",
        "Indian"
      ],
      "avgRating": 3.5,
      "veg": true,
      "parentId": "41463",
      "avgRatingString": "3.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:01:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=496741",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "196365",
      "name": "The Down Town Cafe",
      "cloudinaryImageId": "buy2tab7qhfsegzeauos",
      "locality": "Indiranagar",
      "areaName": "Kankarbagh",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Chinese",
        "Snacks"
      ],
      "avgRating": 4.1,
      "parentId": "207813",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=196365",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }
]

const Body = () => {
    return (
        <div className="body">
            <div className="search"><input className="input" placeholder="Search Restaurant"></input>Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
                </div>

        </div>
    );
};



// const Header = () => {
//     <div className="header">
//         <div className="logo"></div>
//         <div>
//             <h4>Home</h4>
//             <h4>Restaurant</h4>
//             <h4>About Us</h4>
//             <h4>Cart</h4>
//         </div>
//     </div>
// }


const Foot = () => {
    return (
        <div className="footer">
            <p>Made With ❤️ by <a href="https://www.linkedin.com/in/therajusah" target="_blank">Raju Kumar</a></p>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Foot />
        </div>
    );
};






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
