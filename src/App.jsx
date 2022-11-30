import React from "react";
import "./index.css";
import { incNumber } from "./actions";
import { decNumber } from "./actions";
import { useSelector , useDispatch } from "react-redux";

function App(){

    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();

    return(
        <>
            <h1 className="main-heading">Increment/Decrement Counter</h1>
            <h2 className="redux-heading">using React and Redux</h2>
            
            <input type="text" className="number" value={myState}/>

            <button onClick={ () => dispatch(incNumber()) } className="btn btn-danger btn-md inc-btn">Increment(+)</button>
            <button onClick={ () => dispatch(decNumber()) } className="btn btn-danger btn-md dec-btn">Decrement(-)</button>
        </>
    );
};

export default App;