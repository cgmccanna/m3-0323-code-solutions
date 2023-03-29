import { useState } from 'react';

export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState:', isClicked)

  function handleClick() {
    console.log('before calling setter:', isClicked)
    setIsClicked(!isClicked);
    console.log('after calling setter:', isClicked)
  }

  if (isClicked) {
    return (
      <button onClick={() => handleClick()} style={{ backgroundColor: 'white' }}>
        {text} is clicked
      </button>
    )
  }

  return (
    <button onClick={() => handleClick()} style={{backgroundColor: color}}>
      {text}
    </button>
  )
}
