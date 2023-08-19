import { CARD_IMAGE_CDN_URL } from "../utils/constants"

//Props Passing using destructuring
const ResCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
    return (
        <div className='ResCard'>
            <img className="cardlogo" src={CARD_IMAGE_CDN_URL + cloudinaryImageId} alt='cardLogo' />
            <h3> {name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} Star</h5>
        </div>
    )
}

export default ResCard;