import { useState } from "react";

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(true)

  function handleClick() {
    setToggle(!toggle)
  }

  return (
    <div className="container">
      <div className={`switch ${toggle ? "green" : "gray"}`}>
        <div type="checkbox" />
        <div className={`slider ${toggle ? "" : "off"}`} onClick={handleClick}/>
      </div>
      <p>{toggle ? "ON" : "OFF"}</p>
    </div>
  )
}
