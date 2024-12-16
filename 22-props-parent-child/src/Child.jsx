import React, { useState } from 'react'

const Child = ({ fn }) => {
    const [inputVal, setInputVal] = useState('')
    const handleInput = (e) => {
        let value  = e.target.value
        if(value.length > 8){
            return
        }
        setInputVal(value)
        fn(inputVal)
    }
    return (
        <div>
            <input type="text" value={inputVal} onChange={handleInput} />
        </div>

    )
}

export default Child