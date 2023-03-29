import { useState } from 'react';
import './HotButton.css';


export default function HotButton ({color, textColor}) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1)
  }

  if (clicks > 14) {
    color = 'white'
  } else if (clicks > 11) {
    color = 'yellow'
  } else if (clicks > 8) {
    color = 'lightorange'
  } else if (clicks > 5) {
    color = 'coral'
  } else if (clicks > 2) {
    color = 'lightpurple'
  } else if (clicks < 3) {
    color = 'darkpurple'
  }

  return (
    <button onClick={handleClick} className={`default ${color}`}>
      Hot Button
    </button>
  )
}
