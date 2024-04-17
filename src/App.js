import './App.css';
import logo from './girl.png'
import linkedin from './group11.png'
import github from './group8.png'
import instagram from './group7.png'

function App() {
  

  return (
    <div id="div1">
      <span className="nav">  Sandeep Dhamala</span>
      <div className="main">
        <img src={logo} alt="Logo" className="girl" />
        <div className="content">
          <span className="heading">
            Hi, I am Sandeep Dhamala...
          </span>
          <span className="paragraph">
I'm a versatile professional with expertise in technical support, network operations, full-stack development, and graphic design. Skilled in diagnosing and resolving IT issues, I also excel in network management using tools like Nokia AMS and Huawei NCE. As a full-stack developer, I design and deploy web applications, and my graphic design skills add a creative edge to branding strategies. I'm committed to optimizing systems, enhancing user experiences, and driving business success.          
      </span>
    <div className="App">
          <a href="https://drive.google.com/file/d/1Y8QOGaai3QDOtA7wSgjAPz3o0GlpM5bK/view?usp=sharing" target="_blank" rel="noreferrer">
          <button className="resume">Download Resume</button>
        </a>

          </div>
        </div>
        <div className="images">

          <img src={linkedin} alt="linkedin" className="group11 icon" onClick={()=> window.open("https://www.linkedin.com/in/sandeep-dhamala-10030a219", "_blank")} />
          <img src={instagram} alt="instagram" className="group7 icon" onClick={()=> window.open("https://www.instagram.com/sandeep__dhamala/", "_blank")}/>
          <img src={github} alt="github" className="group8 icon" onClick={()=> window.open("https://github.com/sandeep0600", "_blank")}/>
        </div>
      </div>
    </div>
  );
}
export default App;
