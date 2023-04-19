import React from "react";
import Box from "./box";
import Data from "./data";
function Content(){
    return <div className="row">
        {Data.map((content) =>{
            return <Box emoji={content.emoji} emojiName={content.emojiName} emojiDescription={content.emojiDescription}/>
        })}
    </div>
}

export default Content