import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';



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
