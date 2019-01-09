import React from 'react'

class Pet extends React.Component {


    handleAdoptPet = (e) => {
      //debugger
      this.props.onAdoptPet(this.props.id)
    }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === 'male'? <p>'♀'</p> : <p>'♂'</p>}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.adopted ? <button className="ui disabled button">Already adopted</button> :
          <button onClick={this.handleAdoptPet} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet






































// import React from 'react'
//
// export default class Pet extends React.Component {
//   render() {
//     // console.log("INSIDE PET", this.props.type);
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">
//             {this.props.gender === "male" ? <p>'♀'</p> : <p>'♂'</p>}
//             {this.props.name}
//           </a>
//           <div className="meta">
//             <span className="date">{this.props.type}</span>
//           </div>
//           <div className="description">
//             <p>Age: {this.props.age}</p>
//             <p>Weight: {this.props.weight}</p>
//           </div>
//         </div>
//         <div className="extra content">
//         {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button">Adopt pet</button>}
//         </div>
//       </div>
//     )
//   }
// }
