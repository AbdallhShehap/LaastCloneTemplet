import React from 'react';
import { RotatingText } from 'react-rotating-text';

const RotatingWord = () => {
  const items = ['Word1', 'Word2', 'Word3']; // Add your words here

  return (
    <div>
      <RotatingText items={items} />
    </div>
  );
};

export default RotatingWord;
