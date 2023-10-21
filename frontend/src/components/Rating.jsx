import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa';

const Rating = ({value,text}) => {
  return (
    <div className='rating'>
    {/*five stars: */}
        <span>
        {/*if value is greater than 1 than it shows full star. else, if it is greater(or equal) to half than shows half star. else - shows an empty star */}
            { value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            { value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            { value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            { value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
            { value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span className='rating-text'>{text && text }</span>
    </div>
  )
}

export default Rating