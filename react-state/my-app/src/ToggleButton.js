import { useState } from 'react';

export default function ToggleButton({text, color}) {
  const [isClicked, setClicked] = useState(false);
  console.log('useState:', isClicked)

  function handleClick() {
    console.log('before calling setter:', isClicked)
    setClicked(!isClicked);
    console.log('after calling setter:', isClicked)
  }

  if (isClicked) {
    color = 'white'
    text = text + ' clicked'
  }

  return (
    <button onClick={() => handleClick()} style={{backgroundColor: color}}>
      {text}
    </button>
  )
}
