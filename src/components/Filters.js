import React from 'react'

class Filters extends React.Component {

  handleOnChange = (e) => {
    this.props.onChangeType(e.target.value)
  }

  handleOnClick = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleOnChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleOnClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters






































// import React from 'react'
//
// class Filters extends React.Component {
//
//   handleFilterChange = (e) => {
//     // this.props.type = e.target.value
//     this.props.onChangeType(e.target.value)
//   }
//
//   handleButtonFind = () => {
//     // console.log(e);
//     this.props.onFindPetsClick()
//     //this.props is used to call a function passed in
//   }
//
//   render() {
//     // type, onChangeType, onFindPetsClick, beef
//
//     return (
//       <div className="ui form">
//         <h3>Animal type</h3>
//         <div className="field" >
//           <select name="type" id="type" onChange={this.handleFilterChange}>
//             <option value="all">All</option>
//             <option value="cat">Cats</option>
//             <option value="dog">Dogs</option>
//             <option value="micropig">Micropigs</option>
//           </select>
//         </div>
//
//         <div className="field">
//           <button className="ui secondary button" onClick={this.handleButtonFind}>Find pets</button>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Filters
