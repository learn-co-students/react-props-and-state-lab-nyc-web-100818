import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

    onAdoptPet = petId => {
      const pets = this.state.pets.map(p => {
        return p.id === petId ? { ...p, isAdopted: true } : p;
      });
      this.setState({ pets });
    };


  onChangeType = (props) => {
    this.setState({filters:{type:props}})
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all'){
        fetch('/api/pets')
        .then(r=>r.json())
        .then(r=>{
          this.setState({pets: r})
        })
    }else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(r=>r.json())
      .then(r=>{
        this.setState({pets: r})
      })
    }
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} petData={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App






































// import React from 'react'
//
// import Filters from './Filters'
// import PetBrowser from './PetBrowser'
//
// export default class App extends React.Component {
//
//   state = {
//       pets: [],
//       filters: {
//         type: 'all'
//       }
//     }
//
//   onChangeType = changedType => {
//     this.setState({filters: {type: changedType}})//, () =>{console.log(this.state.filters.type)})
//   }
//
//   onFindPetsClick = () => {
//     // console.log("clicked", this.state.filters.type);
//     if(this.state.filters.type === "all"){
//       fetch('/api/pets', {method: 'GET'})
//       .then(res=> res.json())
//       .then(data=> {
//         // console.log("Inside fetch all:",data);
//         this.setState({pets: data})
//         // console.log("New set state after select all:", this.state.pets);
//       })
//     } else {
//       fetch(`/api/pets?type=${this.state.filters.type}`, {method: 'GET'})
//       .then(res=> res.json())
//       .then(data=> {
//         // console.log("Inside fetch type:",data);
//         this.setState({pets: data})
//         // console.log("New set state after select type:", this.state.pets);
//       })
//     }
//   }
//
//   // test = () => {
//   //   console.log("beefysteak")
//   // }
//
//   render() {
//     return (
//       <div className="ui container">
//         <header>
//           <h1 className="ui dividing header">React Animal Shelter</h1>
//         </header>
//         <div className="ui container">
//           <div className="ui grid">
//             <div className="four wide column">
//               <Filters
//                onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
//             </div>
//             <div className="twelve wide column">
//               <PetBrowser petsArr={this.state.pets}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// //
// we start with the render method in the app class. we render content. then we get to the filters class. we pass in the method onChangeType. we want to use that method to set the state type. when will we use that method? when there is a new drop down chosen. so we have to listen for a changeevent on the drop down. when the changeevent is activated, we then assign the value chosen to the state. then we need to listen for a submit action. when the submit happens, we want to fetch data and render it to the page. we create a fetch method on the app class and we create the submit listener in the button tag. when the button is clicked, we call the fetch function. in fetch, we make the pets key = all the fetched data. then we call on the petbrowser and pass in the pets array.
// we then map over the the pet array and pass in each of the values into the pet class. then we render the this.props.age etc. out in html format.
