import './Accordion.css';

export default function Topic ({ title, content, isActive, onShow }) {

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
