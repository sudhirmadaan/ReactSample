import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { CounterState } from '../reducers/counterReducer';
import { RootState } from '../reducers/rootReducer';

export default function ReduxComponent() {

    const counter = useSelector((state:RootState) => state.counter.counterValue);


    // let userData = useSelector((state: RootState) => {
    //     return state.user.data;
    //   });


    const dispatch = useDispatch();

    return(<div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=> dispatch({type:"INCREMENT"})}>INCREMENT</button>
        <button onClick={()=> dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </div>);
}