import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {


  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((animal, i) => (
          <Pet key={i} onAdoptPet={this.props.onAdoptPet} isAdopted={animal.isAdopted} pet={animal}/>
        ))}
      </div>
    )
  }
}

export default PetBrowser
