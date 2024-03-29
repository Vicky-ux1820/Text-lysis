
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';




function App() {
  const[mode, setMode] = useState('light') //Whether dark mode is enabled or not
  const[alert, setAlert]= useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode is enabled now","success");
      document.title='Textlysis-Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled now","success");
      document.title='Textlysis-Light Mode'
    }
  }
  return (
    <>
    <Navbar title="Text-lysis" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
     <div className="container">
          <TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode}/>
          </div>
     </>

  );
}

export default App;
