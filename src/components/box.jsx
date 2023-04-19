import React from "react";

function Box(props){
    return <div className="col-lg-6 col-sm-12">
        <div className="frosted-2" >
        <div className="the-box">
            <div className="emoji">
                <h1 className="the-real-emoji">{props.emoji}</h1>
            </div>
            <div className="emoji-name">
                <h2 className="emoji-meaning">{props.emojiName}</h2>
            </div>
            <div className="emoji-description">
                <p>{props.emojiDescription}</p>
            </div>
        </div>
        </div>
    </div>
}
export default Box