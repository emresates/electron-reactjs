import React from 'react';
import { useState } from 'react';
import ReactIMG from './assets/react.png';
import ElectronIMG from './assets/electron.png';
import './App.scss';

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h1>Electron with React JS</h1>
      <div>
        <img src={ReactIMG} alt="" />
        <img src={ElectronIMG} alt="" />
      </div>
      <div>
        <p>{value}</p>

        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -
        </button>
      </div>

      <button
        className="notification"
        onClick={() => {
          electron.notificationApi.sendNotification('Custom Notification!');
        }}
      >
        Send Notification
      </button>
    </div>
  );
}
