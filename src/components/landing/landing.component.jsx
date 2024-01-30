import React from 'react';
import SidebarComponent from '../sidebar/sidebar.component';
import SlidebarComponent from "../slider/slider.component.jsx"
import "./landing.styles.css"
const LandingComponent = () => {
    return (
        <div className="container">
        <SidebarComponent />
        <hr />
        <SlidebarComponent />
        </div>

    );
}

export default LandingComponent;
