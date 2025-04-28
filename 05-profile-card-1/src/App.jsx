import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );

  function Avatar() {
    return <img className="avatar" src="capybara_man.jpg" alt="Michael" />;
  }

  function Intro() {
    return (
      <div>
        <h1>Michael</h1>
        <p>
          A junior web developer. I'm proficient in HTML/CSS, JavaScript, have knowledge and worked
          with React. In my free time, I like to cook and try various cuisines, read historical
          fiction and play video games.
        </p>
      </div>
    );
  }

  function SkillList() {
    return (
      <div className="skill-list">
        <Skill text="HTML + CSS" emoji="👍" color="#2d5bd9" />
        <Skill text="JavaScript" emoji="👍" color="#dac620" />
        <Skill text="Web Design" emoji="👶" color="#afc99b" />
        <Skill text="Git and Github" emoji="👍" color="#d74b35" />
        <Skill text="React" emoji="👶" color="#56c7e5" />
      </div>
    );
  }

  function Skill(props) {
    const style = { backgroundColor: props.color };
    return (
      <div className="skill" style={style}>
        <p>{props.text}</p>
        <span>{props.emoji}</span>
      </div>
    );
  }
}
