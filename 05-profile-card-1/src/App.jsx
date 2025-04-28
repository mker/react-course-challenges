import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

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
}

function Avatar() {
  return <img className="avatar" src="capybara_man.jpg" alt="Michael" />;
}

function Intro() {
  return (
    <div>
      <h1>Michael</h1>
      <p>
        A junior web developer. I'm proficient in HTML/CSS, JavaScript, have knowledge and worked
        with React. In my free time I like to cook and try various cuisines, read historical fiction
        and play video games.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill key={skill.skill} {...skill}></Skill>
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  const style = { backgroundColor: color };
  return (
    <div className="skill" style={style}>
      <p>{skill}</p>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
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
