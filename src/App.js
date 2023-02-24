
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>

    {/* when something is passed default values wont be shown. when nothing is shown default value will be shown */}
    {/* <Navbar title="Welcome" aboutText='loda lehsun'/> */}
    <Navbar title="Textutils" />
    {/* <Navbar/> */}
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below: "/>
    </div>

    </>
    
  );
}

export default App;
