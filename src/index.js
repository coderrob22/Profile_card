import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Avatar from "./Components/Avatar";
import SkillList from "./Components/SkillList";
import Intro from "./Components/Intro";


function App() {
  return (
    <div className="card">
      <Avatar 
      image="105181695.png"
      alt="Picture of developer"/>
      
      <div className="data">
        <Intro 
        title="Robert Knott"
        body="Full-stack web and mobile developer. I also have experience with ServiceNow and hold my CAD and CSA. When I am not building a well architected framework using AWS, I like to visit local mom and pop shops for local cuisine, followed by a walk on the Belt Line."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
