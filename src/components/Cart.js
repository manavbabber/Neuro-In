import React, { useState,useEffect } from 'react'
import Aux from '../hoc/Aux.js';
import Sidebar from './Sidebar.js';

export const Cart = ({match}) => {    
    const [price,setPrice] = useState('');
    useEffect(()=>{
        const p = parseInt(localStorage.getItem('price'));
        let addedPrice = 0;
        addedPrice = addedPrice + p;
        let jojo=parseInt(localStorage.getItem('total'));
        if(jojo>0){
            addedPrice=addedPrice+jojo;
        }
        localStorage.setItem("total",JSON.stringify(addedPrice));
        {console.log(addedPrice)}
        setPrice(addedPrice);
    },[])
    return (
            <Aux>
                <Sidebar />
                <h1 style={{marginTop:'100px'}}>Total Price of all the items: ${price}</h1>
            </Aux>
    )
}
