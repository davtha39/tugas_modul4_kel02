import React,  {useState, useEffect } from "react";
import './Useeffect.css'

export default function Useeffect() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);


useEffect(() => {
    if (count > 0){
        alert(`nilai sekarang: ${count}, bilangan positif`);
    }
    else if (count < 0){
        alert(`nilai sekarang: ${count}, bilangan negatif`);
    }
    else if (count == 0){
        alert(`nilai sekarang: ${count}, bilangan netral`);
    }
}, [count]);

//dijalankan terus menerus
useEffect(() => {
    console.log('spam console kuy');
});

const countUp = () => {
    setCount(count + 1);
};
const countDown = () => {
    setCount(count - 1);
};

return (
    <div className="Main">
        <p className="Text">This is useEffect</p>
        <p>Kelompok 2</p>

        <p className="Text">{count}</p>
        <div className="ViewButton">
            <div className="ViewButton2">
                <button className="Button" onClick={countUp}>
                    Up
                </button>
            </div>
            <div className="ViewButton1">
                <button className="Button" onClick={countDown}>
                    Down
                </button>
            </div>
        </div>
    </div>
);

}
