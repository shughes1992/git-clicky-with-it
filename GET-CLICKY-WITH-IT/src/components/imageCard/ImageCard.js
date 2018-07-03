import React from "react";
import "./imageCard.css";

class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hello: ""
        }
    }
    render() {

        var displayImages = this.props.imageArray.map((eachItem, key) => 
            <img src={eachItem.url} alt={key} key={key} onClick={() => this.props.handleImageClick(eachItem.id)}/>
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



//take handle image click and put in app.js
//want image to change handleImageClick in app.js
    //
//once that's done, we want handle image click to change STATE to "gameMessage = game has started"
//STATE in app is what I need to change & it will show up on page

