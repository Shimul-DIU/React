import React from 'react';
import { useReducer } from 'react';
const Article = () => {
    let initialValue=0;
    function Reducer(state,action){
        if(action==='plus'){
            return state+1;
        }
        else{
            return state-1;
        }
    }
    let [count,dispatch]=useReducer(Reducer,initialValue);
    return (
        <div>
            <h1>Article</h1>
            <h1>{count}</h1>
            <button onClick={()=>dispatch('plus')}>increment</button>
            <button onClick={()=>dispatch('minus')}>decrement</button>

        </div>

    );
};

export default Article;