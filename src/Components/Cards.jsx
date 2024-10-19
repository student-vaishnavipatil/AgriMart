import React from 'react'
import './Cards.css'

import { NavLink } from 'react-router-dom';


const Cards = (Props) => {
    return (
        <div className='Cards'>
            <img className='img' src={Props.src} alt=""  style={{ width: '16vw', height: "18vw", borderRadius: '12px' }} />
            <h3 style={{ textAlign: 'center'}}>{Props.title}</h3>
            <p style={{marginLeft:"12px", fontSize:"19px"}}>{Props.date}</p>
            <p>{Props.description}</p>

            
            <h4 style={{marginLeft:"12px", fontSize:"19px"}}>Price: &#8377;{Props.price}</h4>
           
            <NavLink to={`/detail/${Props.id}`} className="btn btn-primary">
                More Details
            </NavLink>

        </div>
    )
}

export default Cards
