import React from 'react';
import './App.css';
import Greet from './components/welcome';
import InfoSection from './components/info';


function App() {
    return <>
        <div className='container'>
            <div> <Greet /></div>
            <div> <InfoSection /></div>
        </div>
    </>
}

export default App;