import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  petsArray = (props) => {
    if (props.pets) {
      return props.pets.map((pet, i) =><Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
    }
  }

  render() {
    return (
      <div className="ui cards">
        {this.petsArray(this.props)}
      </div>
    )
  }
}

export default PetBrowser
