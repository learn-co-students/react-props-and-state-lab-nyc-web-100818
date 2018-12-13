import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = event => {
    this.setState({value: event.target.value});
    this.props.applyFilter(event.target.value)
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.props)
    this.props.filterPets()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.type} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleSubmit}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
