import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdopted: this.props.pet.isAdopted
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.setState({
        isAdopted: this.props.pet.isAdopted
      })
    }
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  adoptedLogic = () => {
    if (this.state.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    }
  }

  genderLogic = () => {
    if (this.props.pet.gender === "male") {
      return "♂"
    } else {
      return "♀"
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderLogic()}
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
          {this.adoptedLogic()}
        </div>
      </div>
    )
  }
}

export default Pet
