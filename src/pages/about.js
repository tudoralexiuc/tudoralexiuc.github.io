import { useNavigate } from "react-router-dom";
import  NavigationBar from "../components/navigationbar";
import "../App.css";
import TestingLogo from '../assets/testing.svg'

export default function About() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "";
    navigate(path);
  };

  return ( 
    <div className="aboutBody">
        <NavigationBar />
        <div className="introduction">
            <h6>I am a hard-working second year Media Design student that loves creating web designs, while providing the best experience for users. I care about the details and consider the user experience
 to be crucial in creating effective and enjoyable interfaces. I really love biking and I have an affinity for fashion and tattoos.</h6>
        </div>
        <div className="testingLogo"><img className="testing" src={TestingLogo} /></div>
        <div className="testingLogo2"><img className="testing2" src={TestingLogo} /></div>
        <div className="testingLogo3"><img className="testing3" src={TestingLogo} /></div>
    </div>
  );
}