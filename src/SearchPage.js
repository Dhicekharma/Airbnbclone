import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResults from './SearchResults';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_info'>
                <p>
                    63 stays * 26 august to 30 august * 2 guest
                </p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>
                Cancellation Flexinility
                </Button>

                <Button variant='outlined'>
                Type of place
                </Button>


                <Button variant='outlined'>
                    Price
                </Button>


                <Button variant='outlined'>
                    Rooms and beds
                </Button>

                <Button variant='outlined'>
                    More filters
                    </Button>
                     
                
    
            </div>

            <SearchResults 
                    img="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
                    location='Private room in center of london'
                    title="Stay at this spacious Edwardian House"
                    description="1 guest * 1 bed 1.5 shared bthrooms * Wifi * Kitchen * Free parking * Washing Machine"
                    star={4.73}
                    price="$30 / night"
                    total='$117 total'
                    
                    
                    
                    />

                       
               
            
        </div>
    )
}

export default SearchPage;
