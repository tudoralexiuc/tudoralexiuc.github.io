import { useNavigate } from "react-router-dom";
import "../App.css";
import  NavigationBar from "../components/navigationbar";
import Arrow from "../assets/arrow.svg"
import Arrow2 from "../assets/yellowarrow2.svg"
import F1Landingpage from "../assets/landing.png"
import SignUppage from "../assets/signup.png"

export default function Homepage() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/availablework";
    navigate(path);
  };

  return ( 
    <div className="f1grandstandsBody">
        <h1 className="landingText2">landing</h1>
        <div className="F1landingPage"><img className="landingpageImage2" src={F1Landingpage} /></div>
        <img className="yellowarrow3" src={Arrow} />
        <h1 className="shopText2">sign up</h1>
        <div className="signUpPage"><img className="shoppageImage2" src={SignUppage} /></div>
        <img className="yellowarrow4" src={Arrow2} />
        <button className="backToAvailableWork2" onClick={() => routeChange("/availablework")}><h2>back</h2></button>
    </div>
  );
}