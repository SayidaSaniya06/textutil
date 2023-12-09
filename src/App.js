import Navbar from './Components/Navbar';
import './App.css';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg :message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-success');
  // }
  const toggleMode=()=>{
  // const toggleMode=(cls)=>{
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0f3c4c';
      showAlert("Dark mode enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enable","success")
    }
  }
  return (
    <>
  {/* <Navbar title="TextUtils" aboutText="About" mode={mode}   toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/> */}
    <Router>
  <Navbar title="TextUtils" aboutText="About" mode={mode}   toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
    <Routes>
          <Route exact path="/about" element= {<About  mode={mode}/>}> 
           
          </Route>
          <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Charecter Counter, Change font style" mode={mode}/>}>
        
          </Route> 
    </Routes>
  {/* <About/> */}
  </div>
  </Router>
  {/* </div> */}
    </>
     );
}
export default App;
