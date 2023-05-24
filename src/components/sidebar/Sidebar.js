import React from 'react';
import './sidebar.css';
import catprofile from '../../catprofile.jpeg'



export default function Sidebar() {
  return (
    <div className="sidebar-container">
    <img src={catprofile} className="profile-img" alt="profile-pic" />
    </div>
  );
}
