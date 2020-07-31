import React from 'react'
import './List.css'

var ul = document.getElementsByTagName('ul')

class List extends React.Component {

    crossOut = (event) =>{
        if (event.target.tagName === 'LI'){
            event.target.classList.toggle("done")
        }
        
    }

    render(){
        return(
            <div>
                <ul>
                    <li onClick={this.crossOut}>Iron Ingots</li>
                    <li onClick={this.crossOut}>Eggs</li>
                </ul>
            </div>
        )
    }
}

export default List