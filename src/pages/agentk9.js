import { useNavigate } from "react-router-dom";
import "../App.css";
import  NavigationBar from "../components/navigationbar";
import StartAgentVideo from "../assets/startgame.mp4";
import DefeatingBossVideo from "../assets/defeatingboss.mp4";
import Arrow from "../assets/arrow.svg"
import Arrow2 from "../assets/yellowarrow2.svg"

export default function Homepage() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/availablework";
    navigate(path);
  };

  return ( 
    <div className="AgentK9Body">
         <h1 className="landingText">gameplay</h1>       
        <video className="landingpageImage3" autoPlay loop muted>
                  <source src={StartAgentVideo} type="video/mp4" />
              </video>
        <img className="yellowarrow" src={Arrow} />
        <h1 className="shopText3">defeating the boss</h1>
        <video className="shoppageImage3" autoPlay loop muted>
                  <source src={DefeatingBossVideo} type="video/mp4" />
              </video>
        <img className="yellowarrow2" src={Arrow2} />
        <button className="backToAvailableWork" onClick={() => routeChange("/availablework")}><h2>back</h2></button>
    </div>
  );
}