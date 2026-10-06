import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
 const totalItems = 100000
  const itemHeight = 86;
 const showItems = 10

  const [start,setStart] = useState(0);
 const boxRef = useRef(null)

 useEffect(()=>{
   const handleScroll = () => {
    if(!boxRef.current) return
     let top = boxRef.current.scrollTop
    let index = Math.floor(top/itemHeight)

     if(index < 0) index=0
      if(index > totalItems-showItems)
       index=totalItems-showItems

    setStart(index)
   }

   let box=boxRef.current
    box.addEventListener("scroll",handleScroll)

   return ()=>{
    box.removeEventListener("scroll",handleScroll)
   }
 },[])

 let items=[]

 for(let i=start;i<start+showItems;i++){
   items.push(
    <div
     className="item"
      key={i}
     style={{top:i*itemHeight}}
    >
      Item {i+1}
    </div>
   )
 }

 return (
  <div
   className="list"
    ref={boxRef}
  >
   <div
    className="listHeight"
     style={{height:totalItems*itemHeight}}
   >
    {items}
   </div>
  </div>
 )
}

export default App
