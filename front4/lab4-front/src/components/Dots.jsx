import React from "react";
import Header from "../main/Header";
import "../main/main.css";
import TextBoxDots from "../subcomponents/TextBoxDots.jsx";
import Table from "./Table.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Dots = () => {
  const user = useSelector((state) => state.user);
  const [dots, setDots] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:6969/dots/${user.user.token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setDots(data);
          setLoading(false);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [user.user.token]);
  return (
    <div className="barbie-mode">
      <Header />
      <div className="main-container">
        <div className="form-container">
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
              <tspan>R</tspan>
            </text>
            <line x1="210" y1="148" x2="210" y2="152" stroke="#000720"></line>
            <text x="200" y="140">
              <tspan>R</tspan>
              /2
            </text>
            <line x1="90" y1="148" x2="90" y2="152" stroke="#000720"></line>
            <text x="75" y="140">
              -<tspan>R</tspan>
              /2
            </text>
            <line x1="30" y1="148" x2="30" y2="152" stroke="#000720"></line>
            <text x="20" y="140">
              -<tspan>R</tspan>
            </text>
            <line x1="148" y1="30" x2="152" y2="30" stroke="#000720"></line>
            <text x="156" y="35">
              <tspan>R</tspan>
            </text>
            <line x1="148" y1="90" x2="152" y2="90" stroke="#000720"></line>
            <text x="156" y="95">
              <tspan>R</tspan>
              /2
            </text>
            <line x1="148" y1="210" x2="152" y2="210" stroke="#000720"></line>
            <text x="156" y="215">
              -<tspan>R</tspan>
              /2
            </text>
            <line x1="148" y1="270" x2="152" y2="270" stroke="#000720"></line>
            <text x="156" y="275">
              -<tspan>R</tspan>
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
              fillOpacity="0.4"
              stroke="navy"
              fill="blue"
            ></rect>
            <polygon
              points="150,210 150,150 210, 150"
              fillOpacity="0.4"
              stroke="navy"
              fill="blue"
            ></polygon>
            <path
              d="M150 150 L150 90 A60 60 0 0 1 210 150 Z"
              fillOpacity="0.4"
              stroke="navy"
              fill="blue"
            ></path>
          </svg>
          <TextBoxDots />
        </div>
        <div className="table-container">
          <Table dots={dots} />
        </div>
      </div>
    </div>
  );
};

export default Dots;
