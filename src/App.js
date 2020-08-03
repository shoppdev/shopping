import React from 'react';
import './App.css'
import List from './List'
import AddBox from './AddBox'
import Submit from './Submit'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      listItem: ["Thing1, Thing2"],
      itemToAdd: 'X.X'
    }
  }

  addItem = (event) =>{
    this.setState({listItem: event.target.value})
  }

  //a step behind...
  addToList = () =>{ 
    this.setState({itemToAdd: this.state.listItem}, () => console.log("adding: ", this.state.itemToAdd))
  }


  render(){
    return(
      <div>
        <h1>Item Request</h1>
        <AddBox addItem={this.addItem}/>
        <Submit addToList={this.addToList}/>
        <List itemToAdd={this.state.itemToAdd}/>
      </div>
    )
  }
} 

export default App