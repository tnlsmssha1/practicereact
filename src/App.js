import { useState, useEffect } from "react";

function Hello(){
  useEffect(()=>{
    console.log("hi");
    return ()=> console.log("bye")
  },[])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing]=useState(false)
  const onClick= () => setShowing((prev)=>!prev);
  return (
    <div>
      <button onClick={onClick}>{showing?"hide":"show"}</button>
      {showing? <Hello />:null}
    </div>
  );
}

export default App;
