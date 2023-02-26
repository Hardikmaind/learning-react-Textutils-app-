
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// imrs keyword short cut for below
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  // i want app.js to have the control


    
    //state for alert
    const [alert, setAlert] = useState(null);
    // here we will be  defining alert/setAlert as an object and below i will write a function as set alert
    const showAlert =(message,type)=>{
      setAlert({
        // we would aslo be able to specify the  msg as message. to avoid confusion i have stated here diff variable
        msg:message,
        // here both the type and type are different
        type:type
      })
      // this time out will auto dissable the alert
      setTimeout(() => {
        // due to this after sometime the alert will be set to null. i,e it will be removed
        setAlert(null)
      }, 1000);

    }





  // state for dark mode
  // dark mode enabled hain ya nahi main yeh yaha se control kar sakta.
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not.

  const togglemode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      // here success type alert is shown which is green in color
      showAlert("dark mode has been enabled","success")
      
      //now the problem arise that when we set the dark mode to on..we are not able to see the text form's text. so we have to declare it as a state varabel 
      
      
      // this also changes the color of the body. this line means that document mein(means webpage) body ka style(css) backgorundColor #042743 kardo
      document.body.style.backgroundColor='#042743'

      // when this funtions gets called/executed i.e when dark mode is enabled ...webpage title will be change
      // in this way we have accessed the css...document.title means doucment ka titile ye rakh diya
      document.title="TextUtils -Dark Mode"


      // this changes the title of the webchange frequently
      // setInterval(() => {
      //   document.title="TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="install text utils now"
        
      // }, 750);
    }
    else{
      setMode('light')
      // this also changes the color of the body. this line means that document mein(means webpage) body ka style(css) backgorundColor white kardo
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
      document.title="TextUtils -Light Mode"
    }
  }




  return (
    <>

    {/* when something is passed default values wont be shown. when nothing is shown default value will be shown */}
    {/* <Navbar title="Welcome" aboutText='loda lehsun'/> */}
    {/* here specifymode and the toggle  are the funtions and their values are the props passed into the navbar */}
    <Navbar title="Textutils"  specifymode={mode} toggle={togglemode}/>
    
      {/* here the state variable is passed in alert message. state variable is always passed in "{  }" */}
      {/* here passing state variable alert is passed in Alert.js as prop which also means after the state change setAlert will also be passed. since setAlert is defined as object therefore meg and type will also be passed in the Alert.js*/}
    <Alert alert_message={alert}/>

    <div className="container my-3">
    <TextForm   alert_message={showAlert}  heading="Enter the text to analyze below: " specifymode={mode}/>
    {/* <About/> */}
    </div>

    </>
    
  );
}

export default App;
