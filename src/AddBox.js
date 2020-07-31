import React from 'react'

const AddBox = ({ addItem }) =>{
    return(
        <input
            type="search"
            placeholder='add task'
            onChange={addItem}
        />
    )
}

export default AddBox