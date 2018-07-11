import React from "react";
import "./score.css";


class Score extends React.Component{
    render() {
        return (

            <div>
                <div className="Score">
                <div className="container">
                    <h2> score: {this.props.score} </h2>
                    <h2> high score: {this.props.highScore} </h2>
                </div>
                </div>
            </div>

        )
    }
}

export default Score;