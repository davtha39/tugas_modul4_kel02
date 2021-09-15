import React, { useContext } from 'react';
import ReactDOM from "react-dom";

const NumberAContext = React.createContext();
const NumberBContext = React.createContext();
const { Provider, Consumer } = React.createContext();


export default function Usecontext(){
    return(
        <div className="Main">
            <p className="Text">This is useContext</p>
            <p>Kelompok 2</p><br/>
            <NumberAContext.Provider value = {21}>
                <div>
                    <NumberA />
                </div><br/>
            </NumberAContext.Provider>
            <NumberBContext.Provider value = {69}>
                <div>
                    <NumberB />
                </div>
            </NumberBContext.Provider>
        </div>
    );
}

function NumberA(){
    const value = useContext(NumberAContext);
    return <div>
        <button className="Button" onClick = {() => {alert(`Number A value is = ${value}`);}} title = "Number A">
            Number A
        </button>
    </div>;
}

function NumberB(){
    const value = useContext(NumberBContext);
    return <div>
        <button className="Button" onClick = {() => {alert(`Number B value is = ${value}`);}} title = "Number B">
            Number B
        </button>
    </div>;
}