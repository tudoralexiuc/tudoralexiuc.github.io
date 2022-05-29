import { useNavigate } from "react-router-dom";
import "../App.css";
import  NavigationBar from "../components/navigationbar";
import Arrow from "../assets/arrow.svg"
import Arrow2 from "../assets/yellowarrow2.svg"
import SaunaLanding from "../assets/saunalanding.png";
import SaunaProducts from "../assets/saunaproducts.png";

export default function Homepage() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/availablework";
    navigate(path);
  }; 

  return ( 
    <div>
        <div className="saunakoningBody">
        <h1 className="landingText">landing</h1>
        <div className="SaunalandingPage"><img className="landingpageImage3" src={SaunaLanding} /></div>
        <img className="yellowarrow3" src={Arrow} />
        <h1 className="shopText2">products</h1>
        <div className="SaunaproductsPage"><img className="shoppageImage2" src={SaunaProducts} /></div>
        <img className="yellowarrow5" src={Arrow2} />
        <button className="backToAvailableWork4" onClick={() => routeChange("/availablework")}><h2>back</h2></button>
    </div>
    </div>
  );
}