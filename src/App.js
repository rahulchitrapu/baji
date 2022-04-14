import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateForm from './components/UpdateForm';
import CardList from './components/CardList';
import Searchbar from './components/Searchbar';
import AddNewForm from './components/AddNewForm';

function App() {
  const [data,setData]=useState(null)
  const [selAlbum,setSelAlbum]=useState(null)
  const [serachedValue,setSearchedValue]=useState('')
  const [newUserId,setNewUserId]=useState(100)
  const [newUser,setNewUser]=useState(false)
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response)=>{
        
        setData(response.data)
      }
      
    )
    
  },[])

  
  
  const editFunc=(album)=>{
     setSelAlbum(album)
  }
  const deleteFunc=(id)=>{
   
    let filterArr=data.filter((album)=>{
      return album.id !==id
    })
    setData(filterArr)
  }
  
  const saveFunc=(string,album)=>{
   
    album['title']=string
  
    setSelAlbum(null)
  }
  const addNewFunc=(userId,id,title)=>{
    setNewUser(true)
    setNewUserId(newUserId+1)
      let obj={}
      obj['userid']=userId
      obj['id']=id
      obj['title']=title
      setData([obj,...data])
  }

  if(data===null){
    return (
      <div className='App'>
        <h4>No Data</h4>
      </div>
    )
  }
  if(selAlbum!==null){
    return (
    <div className='App-header'>
      <UpdateForm album={selAlbum} saveFunc={saveFunc}/>
    </div>
    )
  }
  if(newUser){
      return <AddNewForm addNewFunc={addNewFunc} id={newUserId} setNewUser={setNewUser} />
  }
  const filtredData=data.filter((album)=>{
      if(album['title']){return album['title'].toLowerCase().includes(serachedValue.toLocaleLowerCase())}
  })
  
  return (
    <div className="App">
        
        <Searchbar serachedValue={serachedValue} setSearchedValue={setSearchedValue}/>
        <button onClick={()=>addNewFunc()} style={{backgroundColor:'green'}}>add new &nbsp;+</button>
        {filtredData.length>0?<CardList data={filtredData} editFunc={editFunc} deleteFunc={deleteFunc}/>:<h2 style={{color:'red'}}>No data present</h2>}
      
    </div>
  );
}

export default App;
