import React from 'react'

class Pet extends React.Component {


  stupidThing = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    }
    else if (this.props.pet.gender === 'female') {
      return '♀'
    }
  }

  handleAdoption = (event) => {
    console.log(this.props.pet.onAdoptPet)
    this.props.onAdoptPet(event.target.name)

  }



  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            Gender:{this.stupidThing()}
            PET NAME: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button" >Already adopted</button> : <button name={this.props.pet.id} onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet

// age: 3
// gender: "male"
// id: "2c902312-dfa3-446f-8b4b-5e115170d807"
// isAdopted: false
// name: "Teddy"
// type: "cat"
// weight: 1
