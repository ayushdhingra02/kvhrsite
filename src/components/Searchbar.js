import React from 'react';
// import './Seachbar.css';
import { Link } from 'react-router-dom';
import JSONDATA from './data.json'
import {useState} from 'react'
export  function Searchbar() {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div className="app"> 
        <input 
          type="text" 
          placeholder="Search..." 
          className="search"
          onChange={event=>{
            setSearchTerm(event.target.value)
            }} 
        />
        {JSONDATA.filter((val)=>{
          if (searchTerm===""){
            return "";
          } else if(val.value.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val;
          }

        }).map((val,key)=>{
          return(
            <div className="list" key ={key}>
              <ul className="listItems">{val.value}</ul>
            </div>
          );
        })}
    </div>
  );
}
