import "./main.css"
import { useState } from "react";
function Main(){
    var inputEl = document.getElementById("input")
    var btnEl = document.getElementById("btn")
    var parentEl = document.getElementById("parent")
    const [todo,settodo] = useState("")

   


    return(
        <div className="main">
        <h1> Todo app</h1>
        <input type="text" id="input"className="input"placeholder="To-do"/>
        <button id="btn">Add</button>
        <div className="parent">
            <div className="parent--header">
                <h3>Your to-do list</h3>
            </div>
            
        </div>
        </div>
    );
}
export default Main;