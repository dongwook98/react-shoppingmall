import React from 'react';
import { Outlet } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}
