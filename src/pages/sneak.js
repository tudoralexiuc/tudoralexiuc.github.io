import { useNavigate } from "react-router-dom";
import "../App.css";
import  NavigationBar from "../components/navigationbar";
import Arrow from "../assets/arrow.svg"
import Arrow2 from "../assets/yellowarrow2.svg"
import Landingpage from "../assets/SneakLanding.png"
import Shoppage from "../assets/shoppage.jpeg"

export default function Homepage() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/availablework";
    navigate(path);
  };

  return ( 
    <div className="sneakBody">
        <h1 className="landingText">landing</h1>
        <div className="landingPage"><img className="landingpageImage" src={Landingpage} /></div>
        <img className="yellowarrow" src={Arrow} />
        <h1 className="shopText">shop</h1>
        <div className="shopPage"><img className="shoppageImage" src={Shoppage} /></div>
        <img className="yellowarrow2" src={Arrow2} />
        <button className="backToAvailableWork" onClick={() => routeChange("/availablework")}><h2>back</h2></button>
    </div>
  );
}