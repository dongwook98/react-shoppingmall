import React from 'react';
import { Outlet } from 'react-router-dom';

export default function EventPage() {
  return (
    <div>
      <h2>🎉 오늘의 이벤트 🎉</h2>
      <Outlet></Outlet>
    </div>
  );
}
