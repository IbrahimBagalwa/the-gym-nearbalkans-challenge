import Link from 'next/link';
import React from 'react';

export default function Button({ title, classNameStyle, click }) {
  return (
    <button type='button' className={classNameStyle} onClick={click}>
      {title}
    </button>
  );
}
