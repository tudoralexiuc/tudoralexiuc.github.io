import { useNavigate } from "react-router-dom";
import "../App.css";

export default function NavigationBar() {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  return ( 
      <div>
  <div className="tudoralexiuc" onClick={() => routeChange("/")}>tudor alexiuc</div>
  <div className="about" onClick={() => routeChange("/about")}>about</div>
  <div className="cv" onClick={() => routeChange("/cv")}>cv</div>
  <div className="availableWork" onClick={() => routeChange("/availablework")}>available work</div>
  </div>
  );
}