import './Accordion.css';
import { useState } from 'react';

export default function Accordion ({ topics }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex)

  return (
    <>
      <Topic
      title={topics[0].title}
      content={topics[0].content}
      isActive={activeIndex === 0}
      onShow={() => activeIndex !== 0 ? setActiveIndex(0) : setActiveIndex(null)}
      />
      <Topic
      title={topics[1].title}
      content={topics[1].content}
      isActive={activeIndex === 1}
      onShow={() => activeIndex !== 1 ? setActiveIndex(1) : setActiveIndex(null)}
      />
      <Topic
      title={topics[2].title}
      content={topics[2].content}
      isActive={activeIndex === 2}
      onShow={() => activeIndex !== 2 ? setActiveIndex(2) : setActiveIndex(null)}
      />
    </>
  )
}

function Topic ({ title, content, isActive, onShow }) {

  return (
    <div className='container'>
      <div onClick={onShow} className="title">
        <h3 onClick={onShow}>{title}</h3>
      </div>
      {isActive ? (
        <div className="content">
        <p>{content}</p>
      </div>
      ) : ('')}
    </div>
  );
}
