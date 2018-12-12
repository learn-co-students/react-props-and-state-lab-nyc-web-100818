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

  onFindPetsClick = () => {
    console.log(this.state.filters.type)
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then(res => this.setState({pets: res}))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(res => this.setState({pets: res}))
    }
  }

  setFilterPets = (event) => {
    console.log('State was:', this.state.filters.type, '// Changing to:', event.target.value)
    this.setState({
      filters: { type: event.target.value }
    })
  }

  onAdoptPet = (id) => {
    console.log('Pet ID:', id)
    const pets = this.state.pets
    const foundPet = pets.find(pet => pet.id === id)
    const newPets = pets.map((pet) => pet === foundPet ? { ...pet, isAdopted: true } : pet)
    this.setState({ pets: newPets })
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
              <Filters
              onFindPetsClick={this.onFindPetsClick}
              setFilterPets={this.setFilterPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
