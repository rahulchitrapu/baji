import React from 'react';

function CardList({data,editFunc,deleteFunc }) {
    return (
        <div>
            {
                data.map((album)=>(
            <div key={album.id} style={{border:'1px solid black',margin:'10px'}}>
                <h1 style={{display:'inline',margin:'10px'}}>{album.title}</h1>
                <button style={{display:'inline',margin:'10px'}} onClick={()=>editFunc(album)} >edit</button>
                <button style={{display:'inline',margin:'10px'}} onClick={()=>deleteFunc(album.id)}>delete</button>
            </div>
            ))
        }
        </div>
    );
}

export default CardList;