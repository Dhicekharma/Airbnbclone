import { React, useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from './Search';
import {useHistory} from 'react-router-dom';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();
  
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
         {showSearch ? 'Hide' : 'Search Dates'}
        </Button> 
      </div>
      <div className="banner_info">
        <h1>Get out and stertch your imaginatiom</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/search')} variant='outlined'>
          Explore
          
        </Button>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
