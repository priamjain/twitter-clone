import React from 'react';
import SideBar from './SideBar'
import Feed from './Feed'
import Widgets from './Widgets'
import './App.css';

function App() {
  return (
    <div className="app">
      {/*SideBar*/}
      <SideBar></SideBar>
    {/*Feed*/}
    <Feed></Feed>
  {/*Widgets*/}
  <Widgets></Widgets>
    </div>
  );
}

export default App;
