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


  onChangeType = (value) => {
    // console.log("trigggered");
    this.setState({
      filters: {
        ...this.state.filters, type: value
      }
    }, () => console.log("new type is", this.state.filters.type))
  }

  componentDidMount() {
    this.fetchPets()
  }

  fetchPets = () => {
    // MY ATTEMPT:
    // console.log("triggered onFindPetsClick");
    let endOfUrl = ''
    if (this.state.filters.type === 'all') {
      endOfUrl = ''
    } else if (this.state.filters.type === 'cat') {
      endOfUrl = "?type=cat"
    } else if (this.state.filters.type === 'dog') {
      endOfUrl = "?type=dog"
    } else if (this.state.filters.type === 'micropig') {
      endOfUrl = "?type=micropig"
    }

    fetch(`/api/pets${endOfUrl}`)
    .then(r => r.json())
    .then(pets => this.setState({ pets }), () => console.log("new state is:", this.state.pets))

  }

  onAdoptPet = (id) => {
    console.log("i triggered onAdoptPet");
    const pets = this.state.pets.map((pet) => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    })
    // must update state
    this.setState({ pets: pets })
  }


  onAdoptPet = petId => {
   const pets = this.state.pets.map(p => {
     return p.id === petId ? { ...p, isAdopted: true } : p;
   });
   this.setState({ pets });
 };

  render() {
    console.log("App state is", this.state);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
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
