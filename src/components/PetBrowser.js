import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
        return (
          <div className="ui cards">
            {this.props.petData.map(pet =>{
              return <Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} age={pet.age} gender={pet.gender} id={pet.id} adopted={pet.isAdopted} name={pet.name} type={pet.type} weight={pet.weight} />})}
          </div>
        )
      }
    }


export default PetBrowser






































// import React, {Fragment} from 'react'
//
// import Pet from './Pet'
//
// export default class PetBrowser extends React.Component {
// // constructor(props){
// //   super(props)
// // }
// // age: 3
// // gender: "male"
// // id: "2c902312-dfa3-446f-8b4b-5e115170d807"
// // isAdopted: false
// // name: "Teddy"
// // type: "cat"
// // weight: 1
//
//   render() {
//     // console.log(this.props.petsArr);
//     return (
//       <Fragment>
//         <div className="ui cards">
//           {this.props.petsArr.map(pet =>{ return <Pet name={pet.name} key={pet.id} gender={pet.gender} isAdopted={pet.isAdopted} age={pet.age} type={pet.type} weight={pet.weight}/>})}
//         </div>
//       </Fragment>
//     )
//   }
// }
