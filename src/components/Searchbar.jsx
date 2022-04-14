import React, { useState } from 'react';

function Serchbar({serachedValue,setSearchedValue}) {
    
    const onChangeHandler=(e)=>{
        setSearchedValue(e.target.value)
    }
    return (
        <div>
            < input type='text' value={serachedValue} placeholder='search' onChange={(e)=>{onChangeHandler(e)}} />
        </div>
    );
}

export default Serchbar;