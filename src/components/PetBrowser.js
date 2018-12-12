import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = (props) => {
    return this.props.pets.map(pet => <Pet petData={pet} onAdoptPet={this.props.onAdoptPet} key={pet.id} />)
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    )
  }
}

export default PetBrowser
