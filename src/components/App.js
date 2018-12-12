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

  filterChange = (val) => {
    this.setState({
      filters: {
        type: val
      }
    })
  }

  fetchPets = () => {
    let baseURL = '/api/pets'
    if (this.state.filters.type === 'all') {
      fetch(baseURL)
        .then(response => response.json())
        .then(pets => (
          this.setState({
            pets: pets
          })
        ))
    } else {
      fetch(`${baseURL}?type=${this.state.filters.type}`)
        .then(response => response.json())
        .then(pets => (
          this.setState({
            pets: pets
          })
        ))
    }
  }

  onAdoptPet = (id) => {
    this.setState(prevState => ({
      pets:
      (prevState.pets.map(pet => {
        if (pet.id === id) {
          pet = {...pet, isAdopted: true}
        }
        return pet
      }))
    }))
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
              <Filters onChangeType={this.filterChange} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} isAdopted={this.isAdopted} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
