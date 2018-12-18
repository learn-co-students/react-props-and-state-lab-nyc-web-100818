
import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  // class can't have a const so u just set it = and then reference with this below
  petsMap = () => {
    const mappedPets = this.props.pets.map((pet) => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    })
    return mappedPets
  }


  render() {
    console.log("Pet browser props are", this.props)
    return <div className="ui cards">{this.petsMap()}</div>
  }
}

export default PetBrowser
