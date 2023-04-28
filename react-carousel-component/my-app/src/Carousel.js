import { useState, useEffect } from 'react';
import './Carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel ({ images }) {
  const [index, setIndex] = useState(0);

  function onSelect (i) {
    setIndex(i)
  }

  const all = []
  images.map(image =>
    all.push(<img src={image.src} key={image.id} alt={image.name}/>)
  );

  useEffect(() => {
    const interval = setInterval (() => {
      setIndex((index + 1) % images.length)
    }, 3000);
    return () => clearInterval(interval)
    })

  return (
    <div className='container'>
      <div className='card'>
        <FaChevronLeft
        className='chevron left'
        onClick={() => setIndex(((index - 1 + images.length)) % images.length)}
        />
        {all[index]}
        <FaChevronRight
        className='chevron right'
        onClick={() => setIndex(((index + 1)) % images.length)}
        />
      </div>
      <ProgressDots
        count = {images.length}
        onSelect = {onSelect}
        isActive = {index}
        />
    </div>
  )
}

function ProgressDot ({ isActive, onSelect }) {
  return (
    <span
    className='dot'
    style={{ backgroundColor: isActive ? 'black' : 'white'}}
    onClick={onSelect}>
    </span>
  )
}

function ProgressDots ({ count, onSelect, isActive }) {
  const dots = []
  for (let i = 0; i < count; i++) {
    dots.push(<ProgressDot key={i} isActive={isActive === i} onSelect={() => onSelect(i)} />)
  }
  return <div className='progress-dots'>{dots}</div>
}
