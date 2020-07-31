import React from 'react'

const Submit = ({ addToList }) =>{
    return(
        <button type="submit" onClick={addToList}>Add to List</button>
    )
}

export default Submit