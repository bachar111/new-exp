import React from 'react'
import proptypes from 'prop-types'
import './Profile.css'


const Profile = (props) => {
    const handlename = (Fullname) => {
        alert (`My name is ${props.Fullname}`)
    }
  return (
    <div>
        <h1>HELLO !</h1>
        <h1>This is my Profile</h1>
        <h2>My name is {props.Fullname}</h2>
        <h2>I'm a {props.bio}</h2>
        <h2>Future {props.profession}</h2>
        <h2>I study in {props.adresse}</h2>
        <h2>I have {props.age} yo</h2>
        <div className='btn'>
        {props.children}
        <button onClick={handlename}>Click on me</button>
        </div>
        
    </div>
  )
}

export default Profile
Profile.defaultProps={adresse:"GoMyCode"}
Profile.propTypes ={age:proptypes.string}