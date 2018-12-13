import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

  onChangeType= changedType => {
    this.setState({filters: {type: changedType}}, () =>{console.log(this.state.filters.type)})
  }

  onFindPetsClick = () => {
    // console.log("clicked", this.state.filters.type);
    if(this.state.filters.type === "all"){
      fetch('/api/pets', {method: 'GET'})
      .then(res=> res.json())
      .then(data=> {
        // console.log("Inside fetch all:",data);
        this.setState({pets: data})
        // console.log("New set state after select all:", this.state.pets);
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`, {method: 'GET'})
      .then(res=> res.json())
      .then(data=> {
        // console.log("Inside fetch type:",data);
        this.setState({pets: data})
        // console.log("New set state after select type:", this.state.pets);
      })
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters type={this.state.filters.type} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petsArr={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
