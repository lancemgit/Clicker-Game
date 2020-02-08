import { Component } from "react";
import imgs from "../../imgs.json";
import React from "react"
import ClickerComp from "../ClickerComp"
import { CardDeck } from "reactstrap"



class ClickerWrapper extends Component {
    state = {
        imgs,
        score: 0,
        topScore: 0,
        clicked: []
    }

    componentDidMount() {
        this.randomizeArray();
    }

    updateTop = () => {
        if (this.state.score >= this.state.topScore) {
            this.setState({ topScore: this.state.score });
        }

    }

    imgClick = (id) => {
        // success
        if (this.state.clicked.indexOf(id) === -1) {
            //increase score
            this.setState({
                score: this.state.score + 1,
                clicked: this.state.clicked.concat(id)
            }, () => {
                //using a callback since setstate is async
                //check to the see if the new score is the new top score also
                this.updateTop();
            });
            //if the player has hit all the images than reset the game
            if (this.state.score === 12) {
                this.setState({
                    score: 0,
                    clicked: []
                });
            }
        } else {
            //failure
            this.setState({ score: 0, clicked: [] });
        }

        //change the images shown
        this.randomizeArray();
    }

    randomizeArray = () => {
        let array = imgs;
        //this is boiler plate code to randomize an array
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        //set imgs to the randomized array
        this.setState({ imgs: array });
    }

    render() {
        return (


            < div >
                <br />
                <div className="text-center">
                    <p>Current Score: {this.state.score}</p>
                    <p>Top Score: {this.state.topScore}</p>
                </div>
                <br />
                <CardDeck>
                    {this.state.imgs.map(img => (
                        <ClickerComp
                            img={img.img}
                            id={img.id}
                            alt={img.alt}
                            imgClick={this.imgClick} />
                    ))}
                </CardDeck>
            </div >
        );
    }
}

export default ClickerWrapper;