import React from 'react';
import './SearchResults.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchResults(
    img,
    location,
    title,
    description,
    star,
    price,
    total,
) {
    return (
        <div className='searchResults'>
            <img src={img} alt='' />

            <FavoriteBorderIcon className='searchResults_heart' />

            <div className='searchResults_info'>
                <div className='searchResults_infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description} </p>

                </div>

                <div className='searchResults_infoBottom'>
                    <div className='searchResults_stars'>
                        <StarIcon className='searchResults_star'/>
                        <p>
                            <strong>{star}</strong>
                        </p>

                    </div>
                    <div className='searchResults_price'>
                    <h2>{price}</h2>
                        <p>{total}</p>
                    </div>


                </div>
                
                </div> 

        </div>
    )
}

export default SearchResults;
