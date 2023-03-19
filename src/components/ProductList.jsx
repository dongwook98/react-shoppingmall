import React from 'react';

export default function ProductList({ shoes, index, src }) {
  return (
    <div>
      <img src={src} width='80%' alt='' />
      <h4>{shoes[index].title}</h4>
      <p>{shoes[index].content}</p>
      <p>{shoes[index].price}</p>
    </div>
  );
}
