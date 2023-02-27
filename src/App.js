/* eslint-disable no-unused-vars */

import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// imrs keyword short cut for below
import { useState } from "react";
import Alert from "./Components/Alert";
// since we have imported Browser Router as Router then we have to enclose all the <Routes/> in <Router> </Router>. if we directly import BrowserRouter then we have to enclose <Routes/> in <BrowserRouter> </BrowserRouter>
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // i want app.js to have the control

  //state for alert
  const [alert, setAlert] = useState(null);
  // here we will be  defining alert/setAlert as an object and below i will write a function as set alert
  const showAlert = (message, type) => {
    setAlert({
      // we would aslo be able to specify the  msg as message. to avoid confusion i have stated here diff variable
      msg: message,
      // here both the type and type are different
      type: type,
    });
    // this time out will auto dissable the alert
    setTimeout(() => {
      // due to this after sometime the alert will be set to null. i,e it will be removed
      setAlert(null);
    }, 1000);
  };

  // state for dark mode
  // dark mode enabled hain ya nahi main yeh yaha se control kar sakta.
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not.

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      // here success type alert is shown which is green in color
      showAlert("dark mode has been enabled", "success");

      //now the problem arise that when we set the dark mode to on..we are not able to see the text form's text. so we have to declare it as a state varabel

      // this also changes the color of the body. this line means that document mein(means webpage) body ka style(css) backgorundColor #042743 kardo
      document.body.style.backgroundColor = "#042743";

      // when this funtions gets called/executed i.e when dark mode is enabled ...webpage title will be change
      // in this way we have accessed the css...document.title means doucment ka titile ye rakh diya
      // document.title = "TextUtils -Dark Mode";

      // this changes the title of the webchange frequently
      // setInterval(() => {
      //   document.title="TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="install text utils now"

      // }, 750);
    } else {
      setMode("light");
      // this also changes the color of the body. this line means that document mein(means webpage) body ka style(css) backgorundColor white kardo
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      // document.title = "TextUtils -Light Mode";
    }
  };

  return (
    <>
      {/*  in <Router></Router> we write <Routes> </Routes> in this we write <Route path=" /about " element={<About/>}/> to go to About.js from the home page/App.js . also we need to Link the route path in this file(App,js) to the Navbar.js by writing <Link> <Link/> instead of <a></a> , and in <Link> <Link/> we have to add " to" instead of href. also keep in my that path in <Route/> and in "to" in <Link> <Link/> should be same to take affect. We could have also just use <a></a>  and href ,but it would reload the whole page and we dont want that*/}

      <Router>
        {/* when something is passed default values wont be shown. when nothing is shown default value will be shown */}
        {/* <Navbar title="Welcome" aboutText='loda lehsun'/> */}
        {/* here specifymode and the toggle  are the funtions and their values are the props passed into the navbar */}
        <Navbar title="Textutils" specifymode={mode} toggle={togglemode} />

        {/* here the state variable is passed in alert message. state variable is always passed in "{  }" */}
        {/* here passing state variable alert is passed in Alert.js as prop which also means after the state change setAlert will also be passed. since setAlert is defined as object therefore meg and type will also be passed in the Alert.js*/}
        <Alert alert_message={alert} />

        <div className="container my-3">
          <Routes>
          {/* when we write the word exact react uses the exact matching of the path pr it uses the partial matching for example                                                                            consider the two paths /users-->Component1
                                /users/home-->-->Component2
          so here if dont write the exact path the react will let us to the component1 only and not to the component2 where we want to go. so sometime it becomes necessary to write the exact path */}
            <Route exact path="/about" element={<About specifymode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  alert_message={showAlert}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces :"
                  specifymode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;