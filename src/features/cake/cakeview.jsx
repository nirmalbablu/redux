import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { orderCake ,reStockCake} from './cakeslice';

const Cakeview = () => {
    const cakeCount = useSelector((state) => state.cake.cakeCount)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>
                NUMBER OF CAKE:{cakeCount}
            </h2>
            <button onClick={()=>dispatch(orderCake())}>orderCake</button>
            <button onClick={()=>dispatch(reStockCake(3))}>reStockCake</button>

        </div>
    );
};

export default Cakeview;