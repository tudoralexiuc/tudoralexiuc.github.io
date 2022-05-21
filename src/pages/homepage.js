import { useNavigate } from "react-router-dom";
import "../App.css";
import Video from "../assets/video.mp4";

export default function Homepage() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/about";
    navigate(path);
  };

  return ( 
    <div>
          <body className="homepage">
              <video className="backgroundVideo" autoPlay loop muted>
                  <source src={Video} type="video/mp4" />
              </video>
            <div className="name">tudor alexiuc</div>
            <button className="enter" onClick={routeChange}><h5>enter</h5></button>
        </body>
    </div>
  );
}