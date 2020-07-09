import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      total_remaining: 1000,
      startingSushi: 0,
      usedPlates: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          sushis: data,
        })
      );
  }


  render4Sushis = () => {
    return this.state.sushis.slice(this.state.startingSushi, this.state.startingSushi + 4)
  }

  incrementSushi = () => {
    this.setState ({
      startingSushi: this.state.startingSushi + 4
    })
  }

  decrementPrice = (price, id) => {
    let emptyPlates = [...this.state.usedPlates]
    emptyPlates.push(id)
    console.log(emptyPlates)
    this.setState ({
      total_remaining: this.state.total_remaining - price,
      usedPlates: emptyPlates
    })
  }
  
  
  
  render() {
    // console.log(this.state.sushis.slice(0, 4));
    console.log(this.state)
    const sushisToRender = this.render4Sushis()
  

    return (
      <div className="app">
        <SushiContainer sushis={sushisToRender} more4={this.incrementSushi} decrementPrice={this.decrementPrice} usedPlates={this.state.usedPlates}/>
        <Table money={this.state.total_remaining} usedPlates={this.state.usedPlates}/>
      </div>
    );
  }
}

export default App;
