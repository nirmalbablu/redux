import React from 'react';
import {useSelector ,useDispatch} from 'react-redux'
import { orderIceCream,reStockIceCream } from './icecreamslice';

const Icecreamview = () => {

    const icecreamCount = useSelector((state) => state.icecream.icecreamCount)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>
                NUMBER OF icecream:
            </h2>
            <button onClick={()=>dispatch(orderIceCream())}>orderIceCream</button>
            <button onClick={()=>dispatch(orderIceCream(3))}>reStockIceCream</button> 
        </div>
    );
};

export default Icecreamview;