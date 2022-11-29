import React from "react"
import ReactDOM from "react-dom/client"
import { CounterApp } from "./CounterApp"
import { FirstApp } from "./FirstApp"
import {App} from "./HelloWorldApp"
import "./main.css"



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
       {/*  <App /> */}
       <FirstApp title="hola soy luis" subtitle='no hay subtitulo' name='luis david'/>
       {/* <CounterApp value={20} /> */}
    </React.StrictMode>
)