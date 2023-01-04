import React from 'react';
import './App.css';
import Profile from './Profile/Profile';

import ProfilePhoto from './Profile/assets/Capture.26.PNG'



function App() {
  return (
    <div className="App">
      <Profile Fullname="bachar" bio="Student" profession="Web developer" age={20}>
        <img src={ProfilePhoto} alt='pic' />
      </Profile>
      
    </div>
  );
}

export default App;