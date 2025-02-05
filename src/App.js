import './App.css';
import React from "react";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sidebar 1</p>
        <Sidebar initialMenuItems={[
            'Karen',
            'Roo',
            'Dora',
            'Spongebob',
            'George Cloney'
          ]}></Sidebar>
      </header>
    </div>
  );
}

export default App;
