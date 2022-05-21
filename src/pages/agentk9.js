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
        <div className="AgentK9landingPage">         
        <video className="startgameVideo" autoPlay loop muted>
                  <source src={StartAgentVideo} type="video/mp4" />
              </video>
        </div>
        <img className="yellowarrow5" src={Arrow} />
        <h1 className="defeatingText">defeating the boss</h1>
        <div className="defeatingbossPage">
        <video className="defeatingbossVideo" autoPlay loop muted>
                  <source src={DefeatingBossVideo} type="video/mp4" />
              </video>
        </div>
        <img className="yellowarrow6" src={Arrow2} />
        <button className="backToAvailableWork3" onClick={() => routeChange("/availablework")}><h2>back</h2></button>
    </div>
  );
}