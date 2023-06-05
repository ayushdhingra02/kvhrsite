import React from 'react';
import './Signin.css';
import { useParams } from "react-router-dom";

export default function Signin() {
  const {userType} = useParams();
  return (
    <>
      <div className='signin'>Signin HELLO {userType}</div>
      {/* <h1 className='signin'>Signin HELLO {userType}</h1> */}
      {/* <p>{userType} hey HELLO</p>> */}
    </>
    
    );

}
