import React, { useState } from "react";
import Title from "./components/title";
import Content from "./components/content";

function App(){
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    function run(){
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(run,1000)
    return <div className="main">
        <Title />
        <h1 className="time">{time}</h1>
        <Content />
    </div>
}

export default App