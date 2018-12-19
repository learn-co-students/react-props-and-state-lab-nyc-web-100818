import React from "react";

class Filters extends React.Component {
  //receives onChangeType(a function so we invoke it and pass it event.target.value as our arguments) as an prop from App.js
  handleSelectChange = event => {
    this.props.onChangeType(event.target.value);
  };

  //receives onFindPetsClick(a function so we invoke it with ()) as an prop from App.js
  handleClick = event => {
    this.props.onFindPetsClick();
  };

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleSelectChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
