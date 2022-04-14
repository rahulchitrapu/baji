import React, { useState } from 'react';

function UpdateForm({album,saveFunc}) {
    const [string,setString]=useState(album.title)
    
    return (

        <div>
            <form>
               title :<input  value={string} onChange={(e)=>{setString(e.target.value)}} placeholder='enter your changes'/>
                <button onClick={()=>saveFunc(string,album)}>save</button>
            </form>
        </div>
    );
}

export default UpdateForm;