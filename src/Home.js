import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home() { 
    return (
        <div className='home'>
            <Banner />

            <div className='home_section'>
                <Card src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
                title="Unique Stays"
                description='Spaces that are more than just aplace to sleep.'
                
                />
                <Card src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
                title='Online Experience'
                description='Unique activities we can do together, led by a world of hosts.'
                />
                <Card src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
                title='Online Experience'
                description='Unique activities we can do together, led by a world of hosts.'/>
            </div>

            <div className='home_section'>
                <Card src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
                title="Penthouse in London"
                description="enjoy your amazing vacation in this beautiful resort"
                price="$350/night"
                
                />
                 <Card src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
                title="Penthouse in London"
                description="enjoy your amazing vacation in this beautiful resort"
                price="$350/night"
                
                />
                 <Card src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
                title="Penthouse in London"
                description="enjoy your amazing vacation in this beautiful resort"
                price="$350/night"
                
                />
                 <Card src="https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg"
                title="Penthouse in London"
                description="enjoy your amazing vacation in this beautiful resort"
                price="$350/night"
                
                />
                
            </div>
            
        </div>
    )
}

export default Home
 