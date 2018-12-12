import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all',
      }
    }
  }

  onChangeType = event => {
    this.setState({
      filters: {...this.state.filters, type: event.target.value}
    })
  }

  onFindPetsClick = (event) => {
    const url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url)
    .then(r=>r.json())
    .then(p=> {
      this.setState(() => Object.assign({}, this.state, {pets: p}))
    })
  }

  onAdoptPet = (id) => {
    const foundPet = this.state.pets.find(pet => pet.id === id)
    foundPet.isAdopted = true
    this.setState(() => Object.assign({}, this.state, {pets: Object.assign([], this.state.pets, this.state.pets.indexOf(foundPet): foundPet)}))

    // const petArr = this.state.pets.slice()
    // foundPet.isAdopted = !foundPet.isAdopted
    // let index = this.state.pets.indexOf(foundPet)
    // petArr.splice(index, 1, foundPet)
    // this.setState({
    //   pets: petArr
    // })
  }


  render() {
    console.log("pets are", this.state.pets)
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
