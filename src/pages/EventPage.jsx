import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function EventPage() {
  let navigate = useNavigate();
  return (
    <div>
      <h2>🎉 오늘의 이벤트 🎉</h2>
      <div
        onClick={() => {
          if (true) {
            navigate('/event/one');
          }
        }}
      >
        이벤트1
      </div>
      <div
        onClick={() => {
          if (true) {
            alert('해당이벤트는 종료되었습니다!!');
            navigate('/event/two');
          }
        }}
      >
        이벤트2
      </div>
      <Outlet></Outlet>
    </div>
  );
}
