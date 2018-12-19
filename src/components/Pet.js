import React from "react";

class Pet extends React.Component {
  // receives pet as prop, and ue the data contained insde that prop to render individual pets

  handleAdoptPet = event => {
    // Should receive an onAdoptPet callback prop. This callback prop gets called with the pet's id when the user clicks the adopt pet button — not when they click the disabled button!
    this.props.onAdoptPet(this.props.pet.id);
  };

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            Gender: {this.props.pet.gender === "male" ? "♂" : "♀"} <br />
            PET NAME: {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE : {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button className="ui primary button" onClick={this.handleAdoptPet}>
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;
