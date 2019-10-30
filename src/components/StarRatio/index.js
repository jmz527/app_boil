// Main Imports
import React from 'react';
import PropTypes from 'prop-types';

// Style Imports
import './index.scss';

const StarRatioSvg = (props) => {
  const starCount = props.starCount || 5; // How many stars there are overall (defaults to 5)
  const starCut = Math.trunc(props.rating) || 0; // How many whole stars
  const ratio = props.rating % 1 || 0.00; // Ratio fill of the half star
  const offset = Math.round(ratio * 100); // Percentage fill of the half star
  let stars = [];
  // console.log({ starCount, starCut, ratio, offset });

  for (var i = 0; i < starCount; i++) {
    if (i === starCut) {
      stars.push(<use key={i} xlinkHref="#icon-star" x={(i * 36)} y="0" className="star--half" />);
    } else if (i > starCut) {
      stars.push(<use key={i} xlinkHref="#icon-star" x={(i * 36)} y="0" className="star--empty" />);
    } else {
      stars.push(<use key={i} xlinkHref="#icon-star" x={(i * 36)} y="0" />);
    }
  }

  return (
    <div className='star-ratio'>
      <svg className='star-source'>
        <defs>
          <g id='icon-star'>
            <path d='M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
                     l11.547-1.2L16.026,0.6L20.388,10.918z' />
          </g>
          <linearGradient id='halfGradient'>
            <stop stopOpacity='1' offset={`${offset}%`} stopColor={props.fill}></stop>
            <stop stopOpacity='0' offset={`${offset}%`}></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg title='5 star rating' className='star' viewBox={`0 0 ${(36 * starCount)} 32`}>
        { stars }
      </svg>
    </div>
  );
};
StarRatioSvg.propTypes = {
  fill: PropTypes.any,
  starCount: PropTypes.any,
  rating: PropTypes.any
};

export default StarRatioSvg;