import React from "react";
import Header from "../main/Header";
import "../main/main.css";
import "../subcomponents/TextBoxDots.jsx";
import { useState } from "react";
import { Alerts } from "../subcomponents/Alerts";
import { ButtonDots } from "../subcomponents/ButtonDots.jsx";
import { useSelector } from "react-redux";
import TextBoxDots from "../subcomponents/TextBoxDots.jsx";


const Dots = () => {
  const user = useSelector((state) => state.user);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [r, setR] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="barbie-mode">
      <Header />
      <div className="main-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg">
            <line x1="0" y1="150" x2="300" y2="150" stroke="#000720"></line>
            <line x1="150" y1="0" x2="150" y2="300" stroke="#000720"></line>
            <polygon
              points="300,150 295,155 295, 145"
              fill="#000720"
              stroke="#000720"
            ></polygon>
            <polygon
              points="150,0 145,5 155,5"
              fill="#000720"
              stroke="#000720"
            ></polygon>
            <text x="282" y="170">
              x
            </text>
            <text x="163" y="14">
              y
            </text>
            <line x1="270" y1="148" x2="270" y2="152" stroke="#000720"></line>
            <text x="265" y="140">
              <tspan class="graph_value">R</tspan>
            </text>
            <line x1="210" y1="148" x2="210" y2="152" stroke="#000720"></line>
            <text x="200" y="140">
              <tspan class="graph_value">R</tspan>
              /2
            </text>
            <line x1="90" y1="148" x2="90" y2="152" stroke="#000720"></line>
            <text x="75" y="140">
              -<tspan class="graph_value">R</tspan>
              /2
            </text>
            <line x1="30" y1="148" x2="30" y2="152" stroke="#000720"></line>
            <text x="20" y="140">
              -<tspan class="graph_value">R</tspan>
            </text>
            <line x1="148" y1="30" x2="152" y2="30" stroke="#000720"></line>
            <text x="156" y="35">
              <tspan class="graph_value">R</tspan>
            </text>
            <line x1="148" y1="90" x2="152" y2="90" stroke="#000720"></line>
            <text x="156" y="95">
              <tspan class="graph_value">R</tspan>
              /2
            </text>
            <line x1="148" y1="210" x2="152" y2="210" stroke="#000720"></line>
            <text x="156" y="215">
              -<tspan class="graph_value">R</tspan>
              /2
            </text>
            <line x1="148" y1="270" x2="152" y2="270" stroke="#000720"></line>
            <text x="156" y="275">
              -<tspan class="graph_value">R</tspan>
            </text>
            <polygon
              points="300,150 295,155 295, 145"
              fill="#000720"
              stroke="#000720"
            ></polygon>
            <polygon
              points="150,0 145,5 155,5"
              fill="#000720"
              stroke="#000720"
            ></polygon>
            <rect
              x="30"
              y="30"
              width="120"
              height="120"
              fill-opacity="0.4"
              stroke="navy"
              fill="blue"
            ></rect>
            <polygon
              points="150,210 150,150 210, 150"
              fill-opacity="0.4"
              stroke="navy"
              fill="blue"
            ></polygon>
            <path
              d="M150 150 L150 90 A60 60 0 0 1 210 150 Z"
              fill-opacity="0.4"
              stroke="navy"
              fill="blue"
            ></path>
          </svg>
          <TextBoxDots x={x} y={y} r={r} setX = {setX} setY = {setY} setR = {setR}/>
          {error && <Alerts message={error} />}
          <ButtonDots />
        </form>
      </div>
    </div>
  );
};

export default Dots;
