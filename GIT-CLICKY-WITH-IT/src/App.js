import React, { Component } from 'react';
import ImageCard from "./components/imageCard/ImageCard";
import NavBar from "./components/navbar/NavBar";
import Score from "./components/score/Score";
import "./App.css"
import obama1 from "./components/imageCard/images/obama1.jpg";
import obama2 from "./components/imageCard/images/obama2.jpg";
import obama3 from "./components/imageCard/images/obama3.jpg";
import obama4 from "./components/imageCard/images/obama4.jpg";
import obama5 from "./components/imageCard/images/obama5.jpg";
import obama6 from "./components/imageCard/images/obama6.jpg";
import obama7 from "./components/imageCard/images/obama7.jpg";
import obama8 from "./components/imageCard/images/obama8.jpg";
import obama9 from "./components/imageCard/images/obama9.jpg";
import obama10 from "./components/imageCard/images/obama10.jpg";
import obama11 from "./components/imageCard/images/obama11.jpg";
import obama12 from "./components/imageCard/images/obama12.jpg";

var clickedCards = [];

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
  { 
    id:6,
    url: obama7,
    hasBeenClicked: false
  },
  { 
    id:7,
    url: obama8,
    hasBeenClicked: false
  },
  { 
    id:8,
    url: obama9,
    hasBeenClicked: false
  },
  { 
    id:9,
    url: obama10,
    hasBeenClicked: false
  },
  { 
    id:10,
    url: obama11,
    hasBeenClicked: false
  },
  { 
    id:11,
    url: obama12,
    hasBeenClicked: false
  },
]

class App extends Component {
  constructor() {
    super() 
    this.state={
      gameMessage: "git clicky with it!",
      imageArray:imageArray,
      clickedCards: [],
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
            score: this.state.score +1,
          })
          //??? 
          clickedCards.push({
            id: imageArray[i].id
          })

        }
        else {
          this.setState({
            highScore: this.state.score,
            score: 0,

          })
        }
      }
    }

    console.log("clicked cards!" + clickedCards[id])
    
    this.setState({
        hello: "hello",
        imageArray: imageArray.sort(() => Math.random() - 0.5)
        //add randomization here
    })
  }


  render() {
    return (
      <div className="App">
    
        < NavBar 
          gameMessage = {this.state.gameMessage}
        />
         < Score 
          highScore = {this.state.highScore}
          score = {this.state.score}
        />

        <br />
        <br />

        < ImageCard 
          imageArray={this.state.imageArray}
          handleImageClick={this.handleImageClick}
          clickedCards={this.state.clickedCards}
        />

      </div>
    );
  }
}

export default App;
