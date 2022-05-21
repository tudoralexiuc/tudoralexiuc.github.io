import  NavigationBar from "../components/navigationbar";
import "../App.css";

export default function CV() {


  return ( 
    <div className="cvBody">
        <NavigationBar />
        <div className="leftColumn">
            <div className="contact">
                <hr></hr>
                <h1>contact</h1>
                <h5>+31 (0)6-18395035</h5>
                <h5>talexiuc10@gmail.com</h5>
                <h5>Waalwijk, NL</h5>
            </div>
            <div className="nationality">
            <hr></hr>
                <h1>nationality</h1>
                <h5>Romanian</h5>
            </div>
            <div className="skills">
            <hr></hr>
                <h1>skills</h1>
                <h5>Adobe XD</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <h5>Figma</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <h5>Axure</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <span className="dot2"></span>
                <h5>HTML</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <h5>CSS</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <h5>JavaScript</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <span className="dot2"></span>
                <h5>UX/UI</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <h5>GIT</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <h5>Unity</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <span className="dot2"></span>
                <h5>C#</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <span className="dot2"></span>
                <h5>Blender</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <span className="dot2"></span>
            </div>
            <div className="languages">
            <hr></hr>
                <h1>languages</h1>
                <h5>English</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot2"></span>
                <h5>Dutch</h5>
                <span className="dot"></span>
                <span className="dot2"></span>
                <span className="dot2"></span>
                <span className="dot2"></span>
                <span className="dot2"></span>
                <h5>Romanian</h5>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
        <div className="rightColumn">
            <div className="education">
            <hr></hr>
                <h1>education</h1>
                <h5>Bachelor of Science, Fontys University of Applied Sciences, Eindhoven</h5>
                <h6>2020-2024</h6>
            </div>
            <div className="courses">
            <hr></hr>
                <h1>courses</h1>
                <h5>Media Design</h5>
                <h6>2020</h6>
            </div>
            <div className="projects">
            <hr></hr>
                <h1>projects</h1>
                <h5>Sneak</h5>
                <h6>Independently developed the front-end solution
 of a sneaker store, where the goal was to have
 an urban modern looking design. The product,
 which ended up having a responsive design,
 was developed using plain JavaScript.
</h6>
                <h5>F1 Grandstands</h5>
                <h6>
Part of a 4-member team, we had to create from
 scratch a website for our client, Team Liquid.
The idea of the project was to make an innovative rewarding system that would make our client’s
fans more engaged. We ended up with an innovative looking front-end, for which we used vanilla JavaScript that was approved by our client,
 whereas the back-end was implemented using Supabase. The wireframes and prototypes were done using AdobeXD.</h6>
                <h5>Agent K9</h5>
                <h6>Agent K9 is a duo project where we had to
 create a game from scratch. The game is a challenging 3rd person roguelike where you
 survive waves of enemies and a boss within

a set time. It was developed using Unity and
 C# for scripts, whereas Blender was used to
 create the assets. The final product was an
 interactive 3D shooter, which received praises
 from our client.</h6>
                <h5>Sauna Koning</h5>
                <h6>
Part of a 4-member team, we had to redesign
and build a new website for Sauna Koning.
Our client was Webber and the main goal was
to focus on UI and a much better UX. Our product,
which had an unique and responsive design,
was created using vanilla JavaScript, fullfiled
the client expectations. Wireframes and prototypes were also done using Adobe XD.</h6>
            </div>
        </div>
    </div>
  );
}