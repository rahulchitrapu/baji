import React, { useState } from 'react';

function AddNewForm({id,setNewUser,addNewFunc}) {
    const [userId,setUserId]=useState(null)
    const [title,setTitle]=useState('')
    const addBtnFunc=()=>{
        addNewFunc(userId,id,title)
        setNewUser(false)
    }
    return (
        <div className='App-header'>
            <form>
                id:<input readOnly value={id}></input><br/>
                userID:<input required placeholder='enter user id' type='number' onChange={(e)=>{setUserId(e.target.value)}} value={userId}></input><br/>
                title:<input required placeholder='enter title' type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input> <br/>
                <button onClick={()=>{addBtnFunc()}}>add</button>
            </form>
        </div>
    );
}

export default AddNewForm;