import React from 'react';
import * as ReactDOM from 'react-dom/client';
import logo from "./Assets/logo.png";

//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

//React Element

// const headingelement = <h1>Hello Element in react</h1>;

// const Heading = () =>
// (
//     <h1> Namaste React- JSX is not a HTMl but HTML like Syntax</h1>//JSX added
// );

//React Component
//Class Based Component - OLD
//Functional Component - NEW

// const HeadingComponent = () => {
//     return <div className='container'>
//         {headingelement} {/*React Element */}
//         <Heading /> {/*Functional Component */}
//         <h1>Namste React Functional Component</h1>
//     </div>
// };

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo}
                    alt='Logo'
                    className='logomain'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Call us</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}
//Props Passing
// const ResCard = (props) => {
//     return (
//         <div className='ResCard'>
//             <img className="cardlogo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf' alt='cardLogo' />
//             <h3> {props.resname}</h3>
//             <h4>{props.cusine}</h4>
//             <h5>4.0 Star</h5>
//         </div>
//     )
// }

//Props Passing using destructuring
const ResCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
    return (
        <div className='ResCard'>
            <img className="cardlogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt='cardLogo' />
            <h3> {name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} Star</h5>
        </div>
    )
}

// const resData =
// {
//     "info": {
//         "id": "89140",
//         "name": "KFC",
//         "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
//         "locality": "Wakad Road",
//         "areaName": "Hinjawadi",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//             "Burgers",
//             "Biryani",
//             "American",
//             "Snacks",
//             "Fast Food"
//         ],
//         "avgRating": 4,
//         "feeDetails": {
//             "restaurantId": "89140",
//             "fees": [
//                 {
//                     "name": "BASE_DISTANCE",
//                     "fee": 4900
//                 },
//                 {
//                     "name": "BASE_TIME"
//                 },
//                 {
//                     "name": "ANCILLARY_SURGE_FEE"
//                 }
//             ],
//             "totalFee": 4900
//         },
//         "parentId": "547",
//         "avgRatingString": "4.0",
//         "totalRatingsString": "10K+",
//         "promoted": true,
//         "adTrackingId": "cid=7861067~p=1~eid=00000189-f970-2c83-3cc7-11ae00ea011b~srvts=1692107025539~45995",
//         "sla": {
//             "deliveryTime": 25,
//             "lastMileTravel": 4.8,
//             "serviceability": "SERVICEABLE",
//             "slaString": "25 mins",
//             "lastMileTravelString": "4.8 km",
//             "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//             "nextCloseTime": "2023-08-15 23:00:00",
//             "opened": true
//         },
//         "badges": {},
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//             "entityBadges": {
//                 "textBased": {},
//                 "imageBased": {},
//                 "textExtendedBadges": {}
//             }
//         },
//         "aggregatedDiscountInfoV3": {
//             "header": "20% OFF",
//             "subHeader": "UPTO ₹50",
//             "discountCalloutInfo": {
//                 "message": "Free Delivery",
//                 "logoCtx": {
//                     "logo": "v1655895371/free_delivery_logo_hqipbo.png"
//                 }
//             }
//         },
//         "orderabilityCommunication": {
//             "title": {},
//             "subTitle": {},
//             "message": {},
//             "customIcon": {}
//         },
//         "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {},
//                 "video": {}
//             }
//         },
//         "reviewsSummary": {},
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {}
//     },
//     "analytics": {},
//     "cta": {
//         "link": "swiggy://menu?restaurant_id=89140",
//         "text": "RESTAURANT_MENU",
//         "type": "DEEPLINK"
//     }
// }




const resList = [
    {
        "info": {
            "id": "60140",
            "name": "KGN Xprs",
            "cloudinaryImageId": "budged7wtkz0oa0fh4f3",
            "locality": "Pimple Saudagar",
            "areaName": "Wakad",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Tandoor",
                "Biryani",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "60140",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "10145",
            "avgRatingString": "3.9",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=7767579~p=1~eid=00000189-f9c7-a294-3d6a-92bd00b1015a~srvts=1692112757396~45995",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=60140",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "235110",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "lncqqbqjmn3dquiqy5tf",
            "locality": "Tathawade",
            "areaName": "Wakad",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "235110",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "2456",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 22:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=235110",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "253596",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Service Road",
            "areaName": "Tathawade",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "253596",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "166",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-16 03:40:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=253596",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "36014",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "areaName": "Hinjawadi",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Fast Food",
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "36014",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "2",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-16 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=36014",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "20223",
            "name": "Oven Story Pizza",
            "cloudinaryImageId": "b3bbdfabc4c38d7732cfb29f8fba352e",
            "locality": "Choudhary Park",
            "areaName": "Wakad",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "20223",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5400
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5400
            },
            "parentId": "3534",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "promoted": true,
            "adTrackingId": "cid=7855341~p=2~eid=00000189-f9c7-a294-3d6a-92be00b10211~srvts=1692112757396~45995",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "26-36 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-16 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹177 OFF",
                "subHeader": "ABOVE ₹1199",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=20223",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "601264",
            "name": "New Kalyan Bhel",
            "cloudinaryImageId": "rgoybv3vahkae3bcb0uz",
            "locality": "Ashok Nagar Road",
            "areaName": "Expressway",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Snacks",
                "Chaat"
            ],
            "avgRating": 3.1,
            "veg": true,
            "feeDetails": {
                "restaurantId": "601264",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "146914",
            "avgRatingString": "3.1",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "ABOVE ₹1000",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=601264",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "24002",
            "name": "Amul Restaurant",
            "cloudinaryImageId": "dwa7qtycvyioxnswru3l",
            "locality": "Tathawade",
            "areaName": "Wakad",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 4,
            "veg": true,
            "feeDetails": {
                "restaurantId": "24002",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "32574",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=24002",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "198274",
            "name": "World Of Cheese Pizza",
            "cloudinaryImageId": "ymttov4eqiol0afu80rl",
            "locality": "Vision One Mall",
            "areaName": "Dange Chowk",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Beverages"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "198274",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "226601",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=198274",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "653661",
            "name": "Mithai Culture ",
            "cloudinaryImageId": "c314090fcac48f3fa4ccf2a23aeac712",
            "locality": "Datta Mandir Road",
            "areaName": "Wakad",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Sweets"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "653661",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "393324",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=7823135~p=3~eid=00000189-f9c7-a294-3d6a-92bf00b1034b~srvts=1692112757396~45995",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=653661",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "568936",
            "name": "Apna Adda",
            "cloudinaryImageId": "wafukehr1e7wyh9rjpbg",
            "locality": "Tathawade",
            "areaName": "Tathawade",
            "costForTwo": "₹1000 for two",
            "cuisines": [
                "Kebabs",
                "Chinese",
                "North Indian",
                "Tandoor"
            ],
            "feeDetails": {
                "restaurantId": "568936",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "3792",
            "avgRatingString": "--",
            "sla": {
                "deliveryTime": 31,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "UPTO ₹125"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=568936",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "23728",
            "name": "McDonald's",
            "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
            "locality": "Santosh Nagar",
            "areaName": "Dange Chowk",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "23728",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "630",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "42 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-16 02:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "FREE ITEM",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=23728",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "104828",
            "name": "Lad Restaurant",
            "cloudinaryImageId": "fs4sif63hxoeojb0x1xl",
            "locality": "Satyam Shivam Housing Society",
            "areaName": "Wakad",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Maharashtrian"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "104828",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3800
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3800
            },
            "parentId": "122780",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=104828",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "721787",
            "name": "Kesar Da Dhaba",
            "cloudinaryImageId": "8ce19b0d185a8c0ffc0725d64cc262f3",
            "locality": "Hinjawadi Marunji Road",
            "areaName": "Hinjewadi",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian",
                "North Indian",
                "Chinese",
                "Snacks",
                "Beverages",
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "721787",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "116499",
            "avgRatingString": "3.8",
            "totalRatingsString": "10+",
            "promoted": true,
            "adTrackingId": "cid=7547242~p=4~eid=00000189-f9c7-a294-3d6a-92c000b1040e~srvts=1692112757396~45995",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=721787",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "400932",
            "name": "Malabar",
            "cloudinaryImageId": "ca8k6woceoy495tgevdw",
            "locality": "Tathawade",
            "areaName": "Wakad",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian"
            ],
            "avgRating": 3.5,
            "feeDetails": {
                "restaurantId": "400932",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4300
            },
            "parentId": "6243",
            "avgRatingString": "3.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-16 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=400932",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "359811",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "wt9jy3aba3ea6nclbelr",
            "locality": "Shankar Kalat Nagar",
            "areaName": "Wakad",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "feeDetails": {
                "restaurantId": "359811",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "12175",
            "avgRatingString": "4.6",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-15 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹177 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=359811",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "390135",
            "name": "NH1 Bowls - Highway To North",
            "cloudinaryImageId": "94654fdf308764cd0faf83dba35bcdc3",
            "locality": "Ganesh Nagar",
            "areaName": "Ravet",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Punjabi",
                "Home Food"
            ],
            "avgRating": 4.4,
            "feeDetails": {
                "restaurantId": "390135",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "22452",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-35 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-16 01:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    },
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100",
                "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=390135",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    }
]




//Cool Deveoper passing props directly using destructuring
// const ResCard = ({ resname, cusine }) => {
//     return (
//         <div className='ResCard'>
//             <img className="cardlogo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf' alt='cardLogo' />
//             <h3> {resname}</h3>
//             <h4>{cusine}</h4>
//             <h5>4.0 Star</h5>
//         </div>
//     )
// }

const Body = () => {
    return (
        <div className='body-container' >
            <div className='search'>
                <input type='text' name='search' className='searchinput' placeholder='Search'></input> Search
            </div>
            <div className='res-container'>
                {/* <ResCard resname={resList[2]} /> */}
                {
                    resList.map((resitems, index) => <ResCard resData={resitems} key={index} />)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
