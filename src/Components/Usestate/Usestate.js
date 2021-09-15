import { React, useState, StyleSheet, Text, View, Button } from "react";
import { useAlert } from 'react-alert';
import "./Usestate.css";
import redstar from "../Assets/Redstar.svg";
import { render } from "@testing-library/react";


export default function Usestate() {
      
    const [showImage, setShowImage] = useState(true);
    const hideImage = () => {
      setShowImage(!showImage);
    };
    const words = [{
        text: 'Hello there',
        key: 1
      },
      {
        text: 'Nice to meet you',
        key: 2
      },
      {
        text: 'Are u ok?',
        key: 3
      },
      {
        text: 'See you later',
        key: 4
      }
    ];
    const [textValue, setTextValue] = useState('change me'); // we call use state hook with initial value
    const len = words.length;
    const changeTextValue = () => {
        setTextValue(words[Math.floor(Math.random() * len)].text); // we use setTextValue function that the hook returned for us
    }

    render();
        return (
            <div className="Main">
            <p className="Text">This is useState</p>
            <p>Kelompok 2</p><br/>
  
            <div className="ViewImage">
                <div className="ViewImage1">
                <img
                    className="App-logo"
                    style={{ display: showImage === true ? "flex" : "none" }}
                    src={redstar}
                    alt="log"
                />
            </div><br/>
            <button className="Button" onClick={hideImage}>
                {showImage !== true ? "show" : "hide"}
            </button>
            <div><br/>
            <button className="Button" onClick = {() => {alert(`${changeTextValue}`);}} title = "Press here">
                Press
            </button>
          </div><br/>
        </div>
      </div>
    );
  }
