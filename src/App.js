import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';

function App() {
  document.title = 'GW Class';
  return (
    <div className="container-fluid h-100 border border-info">
      <div className='row h-25 border border-danger'>Title</div>
      <div className='row h-100 border border-success'>
        <div className='col-sm-3 border border-danger'>Lesson Column</div>
        <div className='col-sm-9 border border-danger'>Text Column</div>
      </div>
    </div>
  );
}

export default App;
