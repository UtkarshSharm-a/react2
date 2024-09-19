import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


const removeBodyClass=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
}

function App() {
  const [mood, setMood] = useState('light');
  
  const toggleMode = (colorchange) => {
    removeBodyClass();
    document.body.classList.add('bg-'+colorchange)

    if (mood === 'light') {
      setMood('dark');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
    } else {
      setMood('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mood} toggleMode={toggleMode} />
        <div className="container">
          <Routes> 
            <Route path="/about" element={<About  mode={mood}/>} /> 
            <Route path="/" element={<TextForm heading="Enter the text to analyse" />} />
          </Routes>
        </div>
       </Router>
    </>
  );
}

export default App;


// import React, { useState } from 'react';
// import Navbar from './component/Navbar';
// import About from './component/About';
// import TextForm from './component/TextForm';
// import './App.css';

// import {
//    BrowserRouter as Router,
//    Routes, 
//    Route 
//   }
//  from 'react-router-dom';


// function App() {
//   const [mood, setMood] = useState('light');

//   const toggleMode = () => {
//     setMood(prevMood => {
//       const newMood = prevMood === 'light' ? 'dark' : 'light';
//       document.body.style.backgroundColor = newMood === 'light' ? 'white' : 'gray';
//       document.body.style.color = newMood === 'light' ? 'black' : 'white';
//       return newMood;
//     });
//   };

//   return (
//     <Router>
//       <Navbar mood={mood} toggleMode={toggleMode} />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<TextForm heading="Enter the text to analyse" />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
