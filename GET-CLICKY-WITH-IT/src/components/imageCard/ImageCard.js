import React from "react";
import "./imageCard.css";
import obama1 from "./images/obama1.jpg";
import obama2 from "./images/obama2.jpg";
import obama3 from "./images/obama3.jpg";
import obama4 from "./images/obama4.jpg";
import obama5 from "./images/obama5.jpg";



var imageArray = [
    obama1,
    obama2,
    obama3,
    obama4,
    obama5
]

class ImageCard extends React.Component{
    constructor(){
        super()
        this.state = {
            hello: ""
        }
    }

//take handle image click and put in app.js
//want image to change handleImageClick in app.js
    //
//once that's done, we want handle image click to change STATE to "gameMessage = game has started"
//STATE in app is what I need to change & it will show up on page


handleImageClick = () => {
        console.log("Image was clicked")
        this.setState({
            hello: "hello"
        })
    }

    render() {
        var displayImages = imageArray.map((eachItem, key) => 
            <img src={eachItem} alt={key} key={key} onClick={this.handleImageClick}/>
        )
        return (
            <div> 
                <div className="image-container">
                    {displayImages}
                </div>
            </div>
        )
    }
}

export default ImageCard;
