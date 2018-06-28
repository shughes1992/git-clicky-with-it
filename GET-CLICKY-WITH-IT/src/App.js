import React, { Component } from 'react';
import ImageCard from "./components/imageCard/ImageCard";
import NavBar from "./components/navbar/NavBar";
import "./App.css"

class App extends Component {
  constructor() {
    super() 
    this.state={
      gameMessage: "Click any image to begin!"
    }
  }
  render() {
    return (
      <div className="App">
    
        < NavBar 
          gameMessage = {this.state.gameMessage}
        />
        < ImageCard />
        
      </div>
    );
  }
}

export default App;
