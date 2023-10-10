import { useState } from 'react';
import './App.css';
import Demo from './Demo';
import Employee from './Employee';

function App() {

  // state creation 
  const [username,setUsername]=useState(`Arun`);
  const [age,setAge]=useState(`25`);
  return (
    <div className="App">
      <h1>App Component</h1>
      <h3>Data Passing - Parent to Child</h3>
      <Demo userfullname={username} userAge={age}/>
      <Employee/>
    </div>
  );
}

export default App;
