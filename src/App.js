import { useState } from "react";
import svg from "./assets/images/icon-star.svg";
// import AddIcon from "@mui/icons-material/Add";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const faqs = [
  {
    title: "What is Frontend Mentor,and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML,CSS and JavaScript. it's suitable for all levels",
    id: "1",
  },
  {
    title: "Is frontend Mentor free?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML,CSS and JavaScript. it's suitable for all levels",
    id: "2",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML,CSS and JavaScript. it's suitable for all levels",
    id: "3",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML,CSS and JavaScript. it's suitable for all levels",
    id: "4",
  },
];
export default function App() {
  return (
    <div>
      <According />
    </div>
  );
}
function According() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="according">
      <div className="top">
        <img src={svg} alt="logo" />
        <h2>FAQS</h2>
      </div>
      <div className="accordion">
        {faqs.map((el) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            text={el.text}
            id={el.id}
            key={el.id}
          />
        ))}
      </div>
    </div>
  );
}
function AccordionItem({ title, text, curOpen, onOpen, children, id }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = id === curOpen;
  const style = { color: "white", fontSize: "18px", fontWeight: "500" };
  function handleToggle() {
    onOpen(isOpen ? null : id);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="wrapper">
        <p className="title">{title}</p>
        <button className={`btn ${isOpen ? "minuse-icon" : ""}`}>
          {isOpen ? <FiMinus style={style} /> : <IoMdAdd style={style} />}
        </button>
        {/* <button className="btn">
          <IoMdAdd />
        </button> */}
      </div>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
