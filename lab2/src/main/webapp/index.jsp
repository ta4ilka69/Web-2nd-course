<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Лаб. 2</title>
    <link rel="shortcut icon" href="./media/favicon.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./css/main.css">
</head>
<body class="barbie-mode">
<h2 class="header" id="student-info">
    Балин Артем Алексеевич P3212, вариант №2249
</h2>
<p class="mode" onclick="pic(1)" id="barbie-mode">Barbie mode on</p>
<p class="mode covered" onclick="pic(2)" id="openheimer-mode">
    Oppenheimer mode on
</p>
<div class="main-container">
    <div class="form_container">
        <form class="input-form">
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" id="svg">
                    <line
                            x1="0"
                            y1="150"
                            x2="300"
                            y2="150"
                            stroke="#000720"
                    ></line>
                    <line
                            x1="150"
                            y1="0"
                            x2="150"
                            y2="300"
                            stroke="#000720"
                    ></line>
                    <polygon points="300,150 295,155 295, 145" fill="#000720" stroke="#000720"></polygon>
                    <polygon points="150,0 145,5 155,5" fill="#000720" stroke="#000720"></polygon>
                    <text x="282" y="170">x</text>
                    <text x="163" y="14">y</text>
                    <line
                            x1="270"
                            y1="148"
                            x2="270"
                            y2="152"
                            stroke="#000720"
                    ></line>
                    <text x="265" y="140">
                        <tspan class="graph_value">R</tspan>
                    </text>
                    <line
                            x1="210"
                            y1="148"
                            x2="210"
                            y2="152"
                            stroke="#000720"
                    ></line>
                    <text x="200" y="140">
                        <tspan class="graph_value">R</tspan>
                        /2
                    </text>
                    <line
                            x1="90"
                            y1="148"
                            x2="90"
                            y2="152"
                            stroke="#000720"
                    ></line>
                    <text x="75" y="140">
                        -
                        <tspan class="graph_value">R</tspan>
                        /2
                    </text>
                    <line
                            x1="30"
                            y1="148"
                            x2="30"
                            y2="152"
                            stroke="#000720"
                    ></line>
                    <text x="20" y="140">
                        -
                        <tspan class="graph_value">R</tspan>
                    </text>
                    <line
                            x1="148"
                            y1="30"
                            x2="152"
                            y2="30"
                            stroke="#000720"
                    ></line>
                    <text x="156" y="35">
                        <tspan class="graph_value">R</tspan>
                    </text>
                    <line
                            x1="148"
                            y1="90"
                            x2="152"
                            y2="90"
                            stroke="#000720"
                    ></line>
                    <text x="156" y="95">
                        <tspan class="graph_value">R</tspan>
                        /2
                    </text>
                    <line
                            x1="148"
                            y1="210"
                            x2="152"
                            y2="210"
                            stroke="#000720"
                    ></line>
                    <text x="156" y="215">
                        -
                        <tspan class="graph_value">R</tspan>
                        /2
                    </text>
                    <line
                            x1="148"
                            y1="270"
                            x2="152"
                            y2="270"
                            stroke="#000720"
                    ></line>
                    <text x="156" y="275">
                        -
                        <tspan class="graph_value">R</tspan>
                    </text>
                    <polygon points="300,150 295,155 295, 145" fill="#000720" stroke="#000720"></polygon>
                    <polygon points="150,0 145,5 155,5" fill="#000720" stroke="#000720"></polygon>
                    <rect
                            x="150"
                            y="150"
                            width="120"
                            height="120"
                            fill-opacity="0.4"
                            stroke="navy"
                            fill="blue"
                    ></rect>
                    <polygon
                            points="31,150 150,150 150, 90"
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
            </p>
            <div class="input-argument-container">
                <label class="input-argument">X:</label>
                <input
                        type="checkbox"
                        name="X-2"
                        id="X-2"
                        onchange="uncheckboxes('-2')"
                        class="input-checkbox"
                >
                <label for="X-2">-2</label>
                <input
                        type="checkbox"
                        name="X-1.5"
                        id="X-1.5"
                        onchange="uncheckboxes('-1.5')"
                        class="input-checkbox"
                >
                <label for="X-1.5">-1.5</label>
                <input
                        type="checkbox"
                        name="X-1"
                        id="X-1"
                        onchange="uncheckboxes('-1')"
                        class="input-checkbox"
                >
                <label for="X-1">-1</label>
                <input
                        type="checkbox"
                        name="X-0.5"
                        id="X-0.5"
                        onchange="uncheckboxes('-0.5')"
                        class="input-checkbox"
                >
                <label for="X-0.5">-0.5</label>
                <input
                        type="checkbox"
                        name="X-0"
                        id="X-0"
                        onchange="uncheckboxes('-0')"
                        class="input-checkbox"
                >
                <label for="X-0">0</label>
                <input
                        type="checkbox"
                        name="X+0.5"
                        id="X+0.5"
                        onchange="uncheckboxes('+0.5')"
                        class="input-checkbox"
                >
                <label for="X+0.5">0.5</label>
                <input
                        type="checkbox"
                        name="X+1"
                        id="X+1"
                        onchange="uncheckboxes('+1')"
                        class="input-checkbox"
                >
                <label for="X+1">1</label>
                <input
                        type="checkbox"
                        name="X+1.5"
                        id="X+1.5"
                        onchange="uncheckboxes('+1.5')"
                        class="input-checkbox"
                >
                <label for="X+1.5">1.5</label>
                <input
                        type="checkbox"
                        name="X+2"
                        id="X+2"
                        onchange="uncheckboxes('+2')"
                        class="input-checkbox"
                >
                <label for="X+2">2</label>
            </div>
            <div class="input-argument-container">
                <label class="input-argument" for="Y-input">Y:</label>
                <input
                        type="text"

                        class="text-input"
                        name="Y"
                        placeholder="Y: (-3...3)"
                        id="Y-input"
                >
            </div>
            <div class="input-argument-container">
                <label class="input-argument">R:</label>
                <label>
                    <input class="input-radio" type="radio" name="radius" value="1">
                    1
                </label>
                <label>
                    <input class="input-radio" type="radio" name="radius" value="1.5">
                    1.5
                </label>
                <label>
                    <input class="input-radio" type="radio" name="radius" value="2">
                    2
                </label>
                <label>
                    <input class="input-radio" type="radio" name="radius" value="2.5">
                    2.5
                </label>
                <label>
                    <input class="input-radio" type="radio" name="radius" value="3">
                    3
                </label>
            </div>
            <input
                    type="submit"
                    value="Send it!"
                    id="form-button"
            >
        </form>
        <p id="error-logs"></p>
    </div>
    <div class="table-container">
        <table id="table-results">
            <tr>
                <th class="argument-column">X</th>
                <th class="argument-column">Y</th>
                <th class="argument-column">R</th>
                <th class="result-column">Result</th>
                <th class="time-column">In work, ms</th>
                <th class="time-column">Received at</th>
            </tr>
            <tbody id="inner-table"></tbody>
        </table>
    </div>
</div>
</body>
<script src="./js/client.js"></script>
<script src="./js/formAction.js"></script>
<script src="./js/dots.js"></script>
</html>
