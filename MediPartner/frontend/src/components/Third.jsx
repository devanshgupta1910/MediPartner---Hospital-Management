import React, { useContext } from 'react'
import { Fname,Lname } from '../App'
const Third = () => {
  let fname=useContext(Fname);
  let lname=useContext(Lname);
  return (
    <>
    <h1>Third Component is running</h1>
    <h2>{fname} {lname}</h2>
    </>
  )
}
export default Third