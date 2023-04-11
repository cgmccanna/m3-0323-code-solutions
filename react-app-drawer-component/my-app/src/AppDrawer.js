import { useState } from "react";
import MenuItems from "./MenuItems"
import './AppDrawer.css';
import { FaBars } from "react-icons/fa";

/**
 *
 * @prop {array} items is an array of objects with 2 properties, a unique id and a title
 * @prop {string} heading a string used for heading of the app drawer
 *
 */

export default function AppDrawer({items, heading}) {
  const [active, setActive] = useState(false);
  return (
    <Contents
    items={items}
    heading={heading}
    active={active}
    onShow={() => setActive(!active)}
    />
  )
}

function Contents({ heading, items, onShow, active }) {
  let action
  if (active) action = onShow;

  return (
      <>
      <div className={active ? 'shade' : ''} onClick={action}>
        <div className={`drawer ${active ? '' : 'hide'}`}>
          <div className="content">
            <h2>{heading}</h2>
            <MenuItems items={items} onShow={onShow}/>
          </div>
        </div>
      </div>
      <FaBars className ={`bars ${active ? 'none' : ''}`} onClick={onShow}/>
      </>
  )
}
