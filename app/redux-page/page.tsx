"use client"

import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../GlobalRedux/Features/counter/counterSlice';
import dummyservice from '@service/dummyservice';

const TablePage = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleServiceReq = () => {
        dummyservice.postReq('asdkhjfaskdf','')
    }

    return (
        <div className='content'>

            <div className="card flex flex-wrap justify-content-center gap-3">
                <button style={{ backgroundColor: "lightblue", padding: "1rem" }} onClick={() => dispatch(increment())}>increment 1</button>
                <button style={{ backgroundColor: "lightblue", padding: "1rem" }} onClick={() => dispatch(decrement())}>decrement 1</button>
                <button style={{ backgroundColor: "lightblue", padding: "1rem" }} onClick={() => dispatch(incrementByAmount(5))}>increment 5</button>
                <button style={{ backgroundColor: "lightblue", padding: "1rem" }} onClick={() => handleServiceReq()}>test</button>
            </div>
            <h1>
                {count}
            </h1>

            {count==6 &&
            <div>
                bak geldi
            </div>}
        </div>
    )
};

export default TablePage;