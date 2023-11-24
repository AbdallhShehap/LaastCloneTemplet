import React, { useState } from 'react';
import '../asisste/Accordion.css'; 

function Accordion() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  const items = [
    {
      title: 'Item 1',
      content: 'Content for Item 1',
    },
    {
      title: 'Item 2',
      content: 'Content for Item 2',
    },
    {
      title: 'Item 3',
      content: 'Content for Item 3',
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${activeItem === index ? 'active' : ''}`}
        >
          <div
            className="accordion-title"
            onClick={() => toggleItem(index)}
          >
          <div>
  {item.title}
  <div className="icon">{activeItem === index ? '-' : '+'}</div>
</div>

          </div>
          {activeItem === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion;
