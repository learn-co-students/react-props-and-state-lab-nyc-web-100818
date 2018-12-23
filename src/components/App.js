import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event)=>{
    console.log("Inside of onChangeType in APP Changing State: ", event.target.value);
    this.setState({
      filters: {type: event.target.value}
    })  
  }

  onFindPetsClick = () => {
    console.log(this.state.filters, "HELLO")
    if (this.state.filters.type === 'all'){
      fetch("/api/pets").then(resp => resp.json())
        .then(petData => this.setState({pets: petData}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(petData => this.setState({pets: petData}));
    }
  }

  onAdoptPet =(petId) => {
    console.log("What What what")
    const pets = this.state.pets.map(pet => {
      if (pet.id === petId){
        return {...pet, isAdopted: true}
      } else{
        return pet
      }
    })
    this.setState({
      pets
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
