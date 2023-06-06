import "./main.css"
import { useState } from "react";
function Main(){
    const [listData, setListData] = useState([])
    const [activity, setActivity] = useState("")
    function addActivity(){
        setListData((listData)=>{
            const newData = [...listData,activity]
            console.log(newData)
            setActivity("")
            return newData;
        })
        
    }

    return(
        <div className="main">
        <h1> Todo app</h1>
        <input type="text" id="input"className="input"placeholder="To-do" value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button id="btn" onClick={addActivity}>Add</button>
        <div className="list-heading">Here is your List </div>
        {listData!=[] && listData.map((data,i)=>{
            return(
                <>
                   <h2 className="addedData" key={i}>
                     <div className="listData">{data}</div>
                    </h2> 
                </>
            )
        })
        }
        </div>
    );
}
export default Main;

