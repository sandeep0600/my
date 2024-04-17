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
I am a versatile professional with a robust skill set encompassing technical expertise, outstanding customer service, and proficiency in full-stack development and graphic design. In my role, I excel in diagnosing and resolving hardware and software issues, collaborating effectively with teams, and maintaining meticulous documentation. My experience in network operations includes overseeing infrastructure, addressing alerts promptly, identifying and remedying problems, and managing various networking tools such as Nokia AMS, Huawei NCE, SSRMS, Cacti, Zabbix, ACS, BNG, routing and switching, and Zero Touch Provisioning (ZTP). As a full-stack developer, I bring valuable experience in designing, developing, and deploying web applications, ensuring seamless user experiences and optimal functionality. Additionally, my expertise in graphic design adds a creative edge to my work, enhancing visual communication and branding strategies. I am dedicated to contributing effectively to network management, optimization, full-stack development, graphic design, and other areas, ensuring seamless operations and enhancing overall business performance.          </span>
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
