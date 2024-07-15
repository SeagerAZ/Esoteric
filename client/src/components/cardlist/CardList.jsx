import './cardlist.scss'
import Waterfall from '../waterfall/Waterfall';


import Card from '../card/Card'
import { gigsData } from "../../lib/dummydata"
// import { useRef, useState, useEffect } from 'react'

function CardList() {
    return (
        <div className="cardlist">
            {/* {gigsData.map(gig => (
                <Card key={gig.id} item={gig} />
            ))} */}
            <Waterfall items={gigsData.map(gig => <Card key={gig.id} item={gig} />)} columnCount={5} />
            
        </div>
    );

}

export default CardList;