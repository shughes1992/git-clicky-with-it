import React, { Component } from 'react';
import ImageCard from "./components/imageCard/ImageCard";
import NavBar from "./components/navbar/NavBar";
import "./App.css"
import obama1 from "./components/imageCard/images/obama1.jpg";
import obama2 from "./components/imageCard/images/obama2.jpg";
import obama3 from "./components/imageCard/images/obama3.jpg";
import obama4 from "./components/imageCard/images/obama4.jpg";
import obama5 from "./components/imageCard/images/obama5.jpg";
import obama6 from "./components/imageCard/images/obama6.jpg";

var imageArray = [ 
  { 
    id:0,
    url: obama1,
    hasBeenClicked: false
  },
  { 
    id:1,
    url: obama2,
    hasBeenClicked: false
  },
  { 
    id:2,
    url: obama3,
    hasBeenClicked: false
  },
  { 
    id:3,
    url: obama4,
    hasBeenClicked: false
  },
  { 
    id:4,
    url: obama5,
    hasBeenClicked: false
  },
  { 
    id:5,
    url: obama6,
    hasBeenClicked: false
  },
]

class App extends Component {
  constructor() {
    super() 
    this.state={
      gameMessage: "Click any image to begin!",
      imageArray:imageArray,
      score: 0,
      highScore: 0
    }
  }

  handleImageClick = (id) => {
    console.log(id)

    for (var i = 0; i < imageArray.length; i++) {
      if (imageArray[i].id === id) {

        if (imageArray[i].hasBeenClicked === false) {         
          imageArray[i].hasBeenClicked = true;
          this.setState({
            score: this.state.score +1
          })
        }
        else {
          this.setState({
            highScore: this.state.score
          })
          this.setState({
            score: 0
          })
        }

      }
    }

    this.setState({
        hello: "hello"
        //add randomization here
    })
  }


  render() {
    return (
      <div className="App">
    
        < NavBar 
          gameMessage = {this.state.gameMessage}
          highScore = {this.state.highScore}
          score = {this.state.score}
        />
        < ImageCard 
          imageArray={this.state.imageArray}
          handleImageClick={this.handleImageClick}
        />
        
      </div>
    );
  }
}

export default App;
