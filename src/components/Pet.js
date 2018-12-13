import React from 'react'

class Pet extends React.Component {
  handleClick = event => {
    event.preventDefault()
    console.log(this.props)
    this.props.onAdoptPet(this.props.pet.id)
  }

  generateGender = () => {
    let gender = this.props.pet.gender
    if(gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.generateGender()}
            {this.props.pet.name}
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
          { this.props.pet.isAdopted &&
            <button className="ui disabled button">Already adopted</button>
          }
          { !this.props.pet.isAdopted &&
          <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
