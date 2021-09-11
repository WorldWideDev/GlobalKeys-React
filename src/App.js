import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const KEY_MAP = {
    40: "Down",
    37: "Left",
    39: "Right",
    38: "Up"
};

const DEFAULT_STATE = "Use arrow keys";

function App() {
    let [ arrowDirection, setArrowDirection ] = useState(DEFAULT_STATE);
    const arrowStateHandler = (event) => {
        setArrowDirection(KEY_MAP[event.keyCode] || DEFAULT_STATE);
    };
    useEffect(() => {
        window.addEventListener("keydown", arrowStateHandler, false);
    }, [arrowDirection])
    return <h1>{ arrowDirection }</h1>;
}

export default App;
