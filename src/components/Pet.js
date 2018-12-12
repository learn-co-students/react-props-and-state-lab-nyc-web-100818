import React from 'react'

class Pet extends React.Component {

  renderAdoptedButton = () => {
    if (this.props.petData.isAdopted === false) {
      return <button onClick={this.props.adoptPet} className="ui primary button">Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }

  adoptPet = () => {
    this.props.onAdoptPet(this.props.petData.id)
  }

  render() {
    // console.log(this.props)
    return (
      <div className="card">
        <p>----------</p>
        <div className="content">
          <a className="header">
            {this.props.petData.gender === 'female' ? '♀' : '♂' }
            {this.props.petData.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petData.age}</p>
            <p>Weight: {this.props.petData.weight}</p>
          </div>
        </div>
        <div className="extra content">
        { this.renderAdoptedButton() }

        </div>
      </div>
    )
  }
}

export default Pet
